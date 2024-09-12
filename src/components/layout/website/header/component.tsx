import { useMemo } from "react";

import { Sheet, Stack } from "@mui/joy";

import { useMediaQuery } from "usehooks-ts";

import { IS_TABLET_BREAKPOINT } from "@/themes/breakpoints";

export function WebsiteHeader() {
  const isTablet = useMediaQuery(IS_TABLET_BREAKPOINT);

  const height = useMemo(() => (isTablet ? "60px" : "80px"), [isTablet]);

  return (
    <Stack width="100%" height={height} position="fixed">
      <Sheet>{isTablet ? "Tablet" : "Desktop"}</Sheet>
    </Stack>
  );
}
