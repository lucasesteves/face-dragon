import styled from "styled-components";

export const Button = styled.button<{ direction: "left" | "right" }>`
  position: absolute;
  bottom: 50px;
  right: ${({ direction }) => direction === "right" && "25px"};
  left: ${({ direction }) => direction === "left" && "25px"};
  outline: none;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  font: var(--title);
`;
