"use client";

import { forwardRef } from "react";

import { ButtonBase, type ButtonBaseProps } from "../base";

type ButtonOutlinedProps = Readonly<{}> & ButtonBaseProps;

export const ButtonOutlined = forwardRef<
  HTMLButtonElement,
  ButtonOutlinedProps
>((props, ref) => {
  return <ButtonBase {...props} variant="outlined" ref={ref} />;
});

ButtonOutlined.displayName = "ButtonOutlined";
