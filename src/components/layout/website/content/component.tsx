import { useMemo } from "react";

import { Box, Stack } from "@mui/joy";

import { useMediaQuery } from "usehooks-ts";

import { IS_TABLET_BREAKPOINT } from "@/themes/breakpoints";

export function WebsiteContent() {
  const isTablet = useMediaQuery(IS_TABLET_BREAKPOINT);

  return (
    <Box component="main" width="100dvw">
      <Stack>{isTablet ? "Tablet" : "Desktop"}</Stack>
    </Box>
  );
}
