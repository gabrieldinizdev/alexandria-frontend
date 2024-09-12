"use client";

import { forwardRef } from "react";

import { Check } from "@phosphor-icons/react";

import { IconBase } from "@/components/icons";

import type { SnackbarBaseProps } from "../base";
import { SnackbarSoft } from "../soft";

type SnackbarSuccessProps = Readonly<{}> & SnackbarBaseProps;

export const SnackbarSuccess = forwardRef<HTMLDivElement, SnackbarSuccessProps>(
  ({ children, ...props }, ref) => {
    return (
      <SnackbarSoft
        color="success"
        anchorOrigin={{
          horizontal: "center",
          vertical: "top",
        }}
        startDecorator={<IconBase icon={Check} />}
        {...props}
        ref={ref}
      >
        {children}
      </SnackbarSoft>
    );
  }
);

SnackbarSuccess.displayName = "SnackbarSuccess";
