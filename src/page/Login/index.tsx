import React, { useState } from "react";
import * as S from "./styles";
import { useLogin } from "../../hooks";

const Login: React.FC = () => {
  const { dispatch } = useLogin();
  const [credential, setCredential] = useState("");

  return (
    <S.Wrapper>
      <S.Card>
        <S.Title color="primary" align="center">
          Face Dragon
        </S.Title>
        <S.Input
          type="text"
          placeholder="Enter with your name"
          value={credential}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setCredential(event.target.value)
          }
        />
        <S.Button
          disabled={!credential}
          onClick={() => {
            dispatch(credential);
          }}
        >
          Enter
        </S.Button>
      </S.Card>
    </S.Wrapper>
  );
};

export default Login;
