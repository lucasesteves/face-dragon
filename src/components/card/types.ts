import React from "react";

export interface CardProps {
  title?: string;
  description?: string;
  size?: "default" | "large";
  textAlign?: "left" | "center" | "right";
  children: React.ReactNode;
}
