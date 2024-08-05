"use client";

import { forwardRef } from "react";

import { BaseButton, type BaseButtonProps } from "../base";

type SolidButtonProps = Readonly<{}> & BaseButtonProps;

export const SolidButton = forwardRef<HTMLButtonElement, SolidButtonProps>(
  (props, ref) => {
    return <BaseButton {...props} variant="solid" ref={ref} />;
  }
);

SolidButton.displayName = "SolidButton";
