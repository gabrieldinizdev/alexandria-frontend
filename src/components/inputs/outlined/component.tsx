"use client";

import { forwardRef } from "react";

import { BaseInput, type BaseInputProps } from "../base";

type OutlinedInputProps = Readonly<{}> & BaseInputProps;

export const OutlinedInput = forwardRef<HTMLInputElement, OutlinedInputProps>(
  (props, ref) => {
    return <BaseInput {...props} variant="outlined" ref={ref} />;
  }
);

OutlinedInput.displayName = "OutlinedInput";
