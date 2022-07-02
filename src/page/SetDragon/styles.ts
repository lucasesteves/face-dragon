import styled from "styled-components";
import {
  Card as CardComp,
  Button as ButtonComp,
  Title as TitleComp,
  Input as InputComp,
} from "../../components";

export const Wrapper = styled.div`
  padding: 32px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  height: ${({ theme }) => `calc(100vh - ${theme.header.height}px)`};
  overflow: auto;

  @media (max-width: 600px) {
    height: ${({ theme }) => `calc(100vh - ${theme.header.height}px)`};
  }
`;

export const Card = styled(CardComp)`
  margin-right: 12px;
  margin-bottom: 12px;
`;

export const Button = styled(ButtonComp)`
  margin-bottom: 12px;
`;

export const Input = styled(InputComp)`
  margin-bottom: 12px;
`;

export const Title = styled(TitleComp)`
  margin: 24px 0%;
  font: var(--title-light);
`;
