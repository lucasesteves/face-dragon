import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { CircularButton, Header } from "../../components";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { useRequest } from "../../hooks";
import { formatDate } from "../../utils/react";

interface ParamsProps {
  id: string;
}

const AddDragon: React.FC = () => {
  const { createDragon, updateDragon, getDragonsById } = useRequest();
  const history = useHistory();
  const params: ParamsProps = useParams();
  const { pathname } = useLocation();
  const [form, setForm] = useState({
    id: "",
    name: "",
    type: "",
    createdAt: "",
    histories: [],
  });

  const isEdit: boolean = pathname.includes("edit");
  const isReadOnly: boolean = pathname.includes("detail");

  useEffect(() => {
    if (params.id) {
      getDragonsById(params.id).then((response) => {
        setForm(response);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />

      <S.Wrapper>
        <S.Card
          title={`${
            isReadOnly ? "Detail" : isEdit ? "Edit Dragon" : "New Dragon"
          }`}
          size="large"
        >
          {!isReadOnly ? (
            <>
              <S.Input
                type="text"
                placeholder="Name"
                value={form.name}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setForm({ ...form, name: event.target.value })
                }
              />

              <S.Input
                type="text"
                placeholder="Type"
                value={form.type}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setForm({ ...form, type: event.target.value })
                }
              />

              <S.Button
                disabled={!form.name || !form.type}
                onClick={() => {
                  if (isEdit) {
                    updateDragon(form, params.id);
                  } else {
                    createDragon({
                      name: form.name,
                      type: form.type,
                      createdAt: new Date().toISOString(),
                      histories: [],
                    });
                  }
                  history.goBack();
                }}
              >
                {isEdit ? "Edit" : "Create"}
              </S.Button>
            </>
          ) : (
            <>
              <S.Title>
                name: <strong>{form.name}</strong>
              </S.Title>

              <S.Title>
                type: <strong>{form.type}</strong>
              </S.Title>

              <S.Title>
                created: <strong>{formatDate(form.createdAt)}</strong>
              </S.Title>
            </>
          )}
        </S.Card>
      </S.Wrapper>

      <CircularButton
        onClick={() => {
          history.goBack();
        }}
      >
        Back
      </CircularButton>
    </>
  );
};

export default AddDragon;
