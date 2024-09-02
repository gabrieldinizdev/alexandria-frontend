"use client";

import { forwardRef } from "react";

import { SnackbarBase, type SnackbarBaseProps } from "../base";

type SnackbarSoftProps = Readonly<{}> & SnackbarBaseProps;

export const SnackbarSoft = forwardRef<HTMLDivElement, SnackbarSoftProps>(
  (props, ref) => {
    return <SnackbarBase {...props} variant="soft" ref={ref} />;
  }
);

SnackbarSoft.displayName = "SnackbarSoft";
