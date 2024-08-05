"use client";

import { forwardRef, type ReactNode } from "react";

import { Warning } from "@phosphor-icons/react";

import { Icon } from "@/components/icons";

import type { BaseSnackbarProps } from "../base";
import { SoftSnackbar } from "../soft";

type ErrorSnackbarProps = Readonly<{
  children: ReactNode;
}> &
  BaseSnackbarProps;

export const ErrorSnackbar = forwardRef<HTMLDivElement, ErrorSnackbarProps>(
  ({ children, ...props }, ref) => {
    return (
      <SoftSnackbar
        color="danger"
        anchorOrigin={{
          horizontal: "center",
          vertical: "top",
        }}
        startDecorator={<Icon icon={Warning} />}
        {...props}
        ref={ref}
      >
        {children}
      </SoftSnackbar>
    );
  }
);

ErrorSnackbar.displayName = "ErrorSnackbar";