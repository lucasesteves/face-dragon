import React from "react";
import * as S from "./styles";
import { Title } from "..";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  return (
    <S.Wrapper>
      <S.Interactive onClick={() => history.push("/panel")}>
        <Title color="white">Dragons</Title>
      </S.Interactive>
    </S.Wrapper>
  );
};

export default Header;
