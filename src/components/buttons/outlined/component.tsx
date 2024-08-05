"use client";

import { forwardRef } from "react";

import { BaseButton, type BaseButtonProps } from "../base";

type OutlinedButtonProps = Readonly<{}> & BaseButtonProps;

export const OutlinedButton = forwardRef<
  HTMLButtonElement,
  OutlinedButtonProps
>((props, ref) => {
  return <BaseButton {...props} variant="outlined" ref={ref} />;
});

OutlinedButton.displayName = "OutlinedButton";
