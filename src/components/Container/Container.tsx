import React from "react";
import css from "./Container.module.css";
import { ContainerProps } from "./Container.types";

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className={css.container}>{children}</div>;
};

export default Container;
