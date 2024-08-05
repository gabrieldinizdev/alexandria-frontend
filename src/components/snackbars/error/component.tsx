"use client";

import { forwardRef, type ReactNode } from "react";

import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        startDecorator={<FontAwesomeIcon icon={faTriangleExclamation} />}
        {...props}
        ref={ref}
      >
        {children}
      </SoftSnackbar>
    );
  }
);

ErrorSnackbar.displayName = "ErrorSnackbar";
