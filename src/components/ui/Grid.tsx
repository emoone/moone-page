import React, { FC, ReactNode, Component } from "react";
import cn from "clsx";
import s from "./Grid.module.css";

interface GridProps {
  className?: string;
  children?: React.ReactNode;
  layout?: "A" | "B" | "C" | "D" | "normal";
  variant?: "default" | "filled";
}

const Grid = (props: GridProps) => {
  const { className, children, layout = "A", variant = "default" } = props;
  const rootClassName = cn(
    s.root,
    {
      [s.layoutA]: layout === "A",
      [s.layoutB]: layout === "B",
      [s.layoutC]: layout === "C",
      [s.layoutD]: layout === "D",
      [s.layoutNormal]: layout === "normal",
      [s.default]: variant === "default",
      [s.filled]: variant === "filled",
    },
    className
  );
  // console.log(rootClassName);
  console.log(s.root);

  return <div className={rootClassName}>{children}</div>;
};
export default Grid;
