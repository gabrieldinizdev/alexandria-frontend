import { forwardRef } from "react";

import { Snackbar, type SnackbarProps } from "@mui/joy";

export type BaseSnackbarProps = Readonly<{}> & SnackbarProps;

export const BaseSnackbar = forwardRef<HTMLDivElement, BaseSnackbarProps>(
  (props, ref) => {
    return <Snackbar autoHideDuration={3000} {...props} ref={ref} />;
  }
);

BaseSnackbar.displayName = "BaseSnackbar";
