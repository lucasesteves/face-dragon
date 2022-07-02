import React from "react";
import * as S from "./styles";
import * as T from "./types";

const Card: React.FC<T.CardProps> = ({
  title,
  description,
  children,
  size,
  textAlign,
  ...props
}: T.CardProps) => {
  return (
    <S.Wrapper {...props} size={size || "default"}>
      <S.CardTitle textAlign={textAlign || "left"}>{title}</S.CardTitle>
      <S.CardDescription>{description}</S.CardDescription>
      <S.CardAction>{children}</S.CardAction>
    </S.Wrapper>
  );
};

export default Card;
