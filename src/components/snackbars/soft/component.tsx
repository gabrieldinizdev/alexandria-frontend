"use client";

import { forwardRef } from "react";

import { BaseSnackbar, type BaseSnackbarProps } from "../base";

type SoftSnackbarProps = Readonly<{}> & BaseSnackbarProps;

export const SoftSnackbar = forwardRef<HTMLDivElement, SoftSnackbarProps>(
  (props, ref) => {
    return <BaseSnackbar {...props} variant="soft" ref={ref} />;
  }
);

SoftSnackbar.displayName = "SoftSnackbar";
