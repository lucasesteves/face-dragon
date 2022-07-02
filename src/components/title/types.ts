import React from "react";
import { color } from "../input/types";

export interface TitleProps extends color {
  children: React.ReactNode;
  align?: "center" | "left" | "right";
}
