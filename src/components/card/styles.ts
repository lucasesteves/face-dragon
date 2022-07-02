import styled from "styled-components";

export const Wrapper = styled.div<{ size: "default" | "large" }>`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  padding: 14px;
  border-radius: 16px;
  width: ${({ size }) => (size === "default" ? "250px" : "50%")};
  display: flex;
  flex-direction: column;
  box-shadow: 0px 3px 8px rgba(42, 42, 42, 0.05),
    0px 2px 1px rgba(42, 42, 42, 0.05);

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  margin: 0 auto;
  height: 150px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
`;

export const CardTitle = styled.span<{
  textAlign: "center" | "left" | "right";
}>`
  font: var(--title);
  color: ${({ theme }) => theme.colors.text};
  padding: 12px 0;
  text-align: ${({ textAlign }) => textAlign};
`;

export const CardDescription = styled.span`
  font: var(--title-light);
  color: ${({ theme }) => theme.colors.text};
  display: block;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CardAction = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
`;
