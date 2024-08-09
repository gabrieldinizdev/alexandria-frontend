import { forwardRef } from "react";

import {
  type IconButtonProps as IconButtonPropsJoy,
  IconButton as IconButtonJoy,
} from "@mui/joy";

import type { Icon as IconType } from "@phosphor-icons/react";

import { Icon } from "@/components/icons";

export type IconButtonProps = Readonly<{ icon: IconType }> & IconButtonPropsJoy;

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon, ...buttonProps }, ref) => {
    const customSX = buttonProps.sx;

    return (
      <IconButtonJoy
        {...buttonProps}
        sx={{ ...customSX, height: "48px", width: "48px" }}
        ref={ref}
      >
        <Icon size="28px" icon={icon} />
      </IconButtonJoy>
    );
  }
);

IconButton.displayName = "IconButton";
