import { Sheet, Stack } from "@mui/joy";

import { useMediaQuery } from "usehooks-ts";

import { IS_TABLET_BREAKPOINT } from "@/themes/breakpoints";

export function WebsiteFooter() {
  const isTablet = useMediaQuery(IS_TABLET_BREAKPOINT);

  return (
    <Stack width="100%">
      <Sheet variant="soft">FOOTER</Sheet>
    </Stack>
  );
}
