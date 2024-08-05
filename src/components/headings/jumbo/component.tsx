"use client";

import { forwardRef, type ReactNode } from "react";

import { Typography, type TypographyTypeMap } from "@mui/joy";

import { useMediaQuery } from "usehooks-ts";

import { IS_MOBILE_BREAKPOINT } from "@/themes/breakpoints";

type JumboProps = Readonly<{
  children?: ReactNode;
}> &
  TypographyTypeMap["props"];

export const Jumbo = forwardRef<HTMLHeadingElement, JumboProps>(
  ({ children, ...props }, ref) => {
    const isMobile = useMediaQuery(IS_MOBILE_BREAKPOINT);

    if (isMobile)
      return (
        <Typography ref={ref} level="mobileJumbo" {...props}>
          {children}
        </Typography>
      );

    return (
      <Typography ref={ref} level="desktopJumbo" {...props}>
        {children}
      </Typography>
    );
  }
);

Jumbo.displayName = "Jumbo";
