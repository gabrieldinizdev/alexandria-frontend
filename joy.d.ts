import "mui/joy/styles";

import type { PaletteRange } from "@mui/joy/styles";

declare module "@mui/joy/styles" {
  interface TypographySystemOverrides {
    // DISABLE ALL DEFAULT TYPOGRAPHY VARIANTS
    h1: false;
    h2: false;
    h3: false;
    h4: false;
    "title-lg": false;
    "title-md": false;
    "title-sm": false;
    "body-lg": false;
    "body-md": false;
    "body-sm": false;
    "body-xs": false;

    // ENABLE CUSTOM TYPOGRAPHY VARIANTS
    desktopJumbo: true;
    desktopTitle: true;
    desktopSubtitle: true;

    mobileJumbo: true;
    mobileTitle: true;
    mobileSubtitle: true;

    paragraph: true;
    small: true;
    link: true;
    info: true;
  }
}
