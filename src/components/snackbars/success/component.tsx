"use client";

import { forwardRef, type ReactNode } from "react";

import { Check } from "@phosphor-icons/react";

import { Icon } from "@/components/icons";

import type { BaseSnackbarProps } from "../base";
import { SoftSnackbar } from "../soft";

type SuccessSnackbarProps = Readonly<{
  children: ReactNode;
}> &
  BaseSnackbarProps;

export const SuccessSnackbar = forwardRef<HTMLDivElement, SuccessSnackbarProps>(
  ({ children, ...props }, ref) => {
    return (
      <SoftSnackbar
        color="success"
        anchorOrigin={{
          horizontal: "center",
          vertical: "top",
        }}
        startDecorator={<Icon icon={Check} />}
        {...props}
        ref={ref}
      >
        {children}
      </SoftSnackbar>
    );
  }
);

SuccessSnackbar.displayName = "SuccessSnackbar";
