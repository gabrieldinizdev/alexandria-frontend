import { Quicksand } from "next/font/google";
import { Sofia } from "next/font/google";

import { extendTheme } from "@mui/joy/styles";

const sofia = Sofia({ subsets: ["latin"], weight: ["400"] });
const quicksand = Quicksand({ subsets: ["latin"] });

export const SkyTheme = extendTheme({
  colorSchemes: {
    light: { palette: {} },
    dark: { palette: {} },
  },
  fontFamily: {
    display: sofia.style.fontFamily,
    body: quicksand.style.fontFamily,
  },
  typography: {
    // DISABLE ALL DEFAULT TYPOGRAPHY VARIANTS
    h1: undefined,
    h2: undefined,
    h3: undefined,
    h4: undefined,
    "title-lg": undefined,
    "title-md": undefined,
    "title-sm": undefined,
    "body-lg": undefined,
    "body-md": undefined,
    "body-sm": undefined,
    "body-xs": undefined,

    // ENABLE CUSTOM TYPOGRAPHY VARIANTS
    desktopJumbo: {
      fontFamily: "var(--joy-fontFamily-display)",
      fontSize: "2.9875rem",
      fontWeight: 700,
      lineHeight: 1.2,
    },
    desktopTitle: {
      fontFamily: "var(--joy-fontFamily-display)",
      fontSize: "2.075rem",
      fontWeight: 700,
      lineHeight: 1.2,
    },
    desktopSubtitle: {
      fontFamily: "var(--joy-fontFamily-body)",
      fontSize: "1.4375rem",
      fontWeight: 500,
      lineHeight: 1.2,
    },

    mobileJumbo: {
      fontFamily: "var(--joy-fontFamily-display)",
      fontSize: "2.4875rem",
      fontWeight: 700,
      lineHeight: 1.2,
    },
    mobileTitle: {
      fontFamily: "var(--joy-fontFamily-display)",
      fontSize: "1.725rem",
      fontWeight: 700,
      lineHeight: 1.2,
    },
    mobileSubtitle: {
      fontFamily: "var(--joy-fontFamily-body)",
      fontSize: "1.2rem",
      fontWeight: 500,
      lineHeight: 1.2,
    },

    paragraph: {
      fontFamily: "var(--joy-fontFamily-body)",
      fontSize: "1rem",
      fontWeight: 500,
      lineHeight: 1.2,
    },
    small: {
      fontFamily: "var(--joy-fontFamily-body)",
      fontSize: ".8313rem",
      fontWeight: 500,
      lineHeight: 1.2,
    },
    link: {
      fontFamily: "var(--joy-fontFamily-body)",
      fontSize: ".8313rem",
      fontWeight: 500,
      lineHeight: 1.2,
      textDecoration: "underline",
    },
    info: {
      fontFamily: "var(--joy-fontFamily-body)",
      fontSize: ".6937rem",
      fontWeight: 500,
      lineHeight: 1.2,
    },
  },
  components: {
    JoyTypography: {
      defaultProps: {
        levelMapping: {
          desktopJumbo: "h1",
          desktopTitle: "h2",
          desktopSubtitle: "h3",
          mobileJumbo: "h1",
          mobileTitle: "h2",
          mobileSubtitle: "h3",
          paragraph: "p",
          small: "small",
          link: "p",
          info: "span",
        },
      },
    },
  },
});
