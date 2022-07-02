import styled from "styled-components";

export const Wrapper = styled.div`
  height: 70px;
  width: 100%;
  background: ${({ theme }) => theme.colors.primary};
  padding: 12px 0;
  display: flex;
  box-shadow: 0px 3px 8px rgba(42, 42, 42, 0.05),
    0px 2px 1px rgba(42, 42, 42, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Interactive = styled.span`
  cursor: pointer;
`;
