"use client";

import { forwardRef, type ReactNode } from "react";

import { Warning } from "@phosphor-icons/react";

import { IconBase } from "@/components/icons";

import type { SnackbarBaseProps } from "../base";
import { SnackbarSoft } from "../soft";

type SnackbarErrorProps = Readonly<{
  children: ReactNode;
}> &
  SnackbarBaseProps;

export const SnackbarError = forwardRef<HTMLDivElement, SnackbarErrorProps>(
  ({ children, ...props }, ref) => {
    return (
      <SnackbarSoft
        color="danger"
        anchorOrigin={{
          horizontal: "center",
          vertical: "top",
        }}
        startDecorator={<IconBase icon={Warning} />}
        {...props}
        ref={ref}
      >
        {children}
      </SnackbarSoft>
    );
  }
);

SnackbarError.displayName = "SnackbarError";
