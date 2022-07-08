import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { Header, CircularButton } from "../../components";
import { useHistory } from "react-router-dom";
import { useLogin, useRequest } from "../../hooks";
import { removeData } from "../../utils";
import { ordenation } from "../../utils/react";

export interface DragonsProps {
  id: string;
  name: string;
  createdAt: string;
  type: string;
}

const Panel: React.FC = () => {
  const history = useHistory();
  const { setUser } = useLogin();
  const { getDragons, deleteDragon } = useRequest();
  const [dragons, setDragons] = useState<DragonsProps[]>([]);

  const fetchDragons = async () => {
    const response = await getDragons();
    setDragons(response.sort(ordenation));
  };

  useEffect(() => {
    fetchDragons();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />

      <S.Wrapper>
        {dragons.map((item: any) => (
          <S.Card key={item.id} textAlign="center" title={item.name}>
            <S.Button
              variant="outline"
              onClick={() => {
                history.push(`/panel/detail/${item.id}`);
              }}
            >
              Detail
            </S.Button>
            <S.Button
              color={"primary"}
              onClick={() => {
                history.push(`/panel/edit/${item.id}`);
              }}
            >
              Edit
            </S.Button>

            <S.Button
              color={"error"}
              onClick={() => {
                deleteDragon(item.id).then(() => {
                  const remove = dragons.filter(
                    (element) => element.id !== item.id
                  );
                  setDragons(remove);
                });
              }}
            >
              Remove
            </S.Button>
          </S.Card>
        ))}
      </S.Wrapper>

      <CircularButton
        direction="left"
        onClick={() => {
          removeData();
          setUser("");
          history.push("/");
        }}
      >
        Exit
      </CircularButton>
      <CircularButton
        onClick={() => {
          history.push("/panel/add");
        }}
      >
        Add
      </CircularButton>
    </>
  );
};

export default Panel;
