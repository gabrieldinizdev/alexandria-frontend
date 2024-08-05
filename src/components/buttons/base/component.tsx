import { forwardRef } from "react";

import { Button, ButtonProps } from "@mui/joy";

export type BaseButtonProps = Readonly<{}> & ButtonProps;

export const BaseButton = forwardRef<HTMLButtonElement, BaseButtonProps>(
  ({ ...buttonProps }, ref) => {
    const customSX = buttonProps.sx;

    return (
      <Button
        {...buttonProps}
        sx={{ ...customSX, height: "48px", width: "100%" }}
        ref={ref}
      />
    );
  }
);

BaseButton.displayName = "BaseButton";
