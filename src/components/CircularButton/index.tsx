import React from "react";
import * as S from "./styles";

interface CircularButtonProps {
  children: string;
  direction?: "left" | "right";
  onClick: () => void;
}

const CircularButton: React.FC<CircularButtonProps> = ({
  children,
  onClick,
  direction,
  ...props
}: CircularButtonProps) => {
  return (
    <S.Button direction={direction || "right"} onClick={onClick} {...props}>
      {children}
    </S.Button>
  );
};

export default CircularButton;
