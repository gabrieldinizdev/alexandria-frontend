"use client";

import { ReactNode } from "react";

import { Sheet, Stack } from "@mui/joy";

import { useMediaQuery } from "usehooks-ts";

import { IS_MOBILE_BREAKPOINT } from "@/themes/breakpoints";

const boxShadow =
  "0.1px 0.1px 3.3px -4px rgba(0, 0, 0, 0.02), 0.2px 0.2px 6.1px -4px rgba(0, 0, 0, 0.028), 0.4px 0.4px 8.5px -4px rgba(0, 0, 0, 0.032), 0.7px 0.7px 10.7px -4px rgba(0, 0, 0, 0.035), 1.2px 1.2px 12.7px -4px rgba(0, 0, 0, 0.037), 1.8px 1.8px 14.6px -4px rgba(0, 0, 0, 0.038), 2.7px 2.7px 16.4px -4px rgba(0, 0, 0, 0.04), 3.5px 3.5px 18.2px -4px rgba(0, 0, 0, 0.043), 4px 4px 20px -4px rgba(0, 0, 0, 0.049), 4px 4px 22px -4px rgba(0, 0, 0, 0.07)";

type CardAuthProps = Readonly<{ children: ReactNode }>;

export function CardAuth({ children }: CardAuthProps) {
  const isMobile = useMediaQuery(IS_MOBILE_BREAKPOINT);

  return (
    <Stack width="100%" justifyContent="center" alignItems="center">
      <Sheet
        variant="plain"
        sx={{
          p: 4,
          gap: 5,
          boxShadow,
          width: "100%",
          height: "100%",
          borderRadius: isMobile ? 0 : 24,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {children}
      </Sheet>
    </Stack>
  );
}
