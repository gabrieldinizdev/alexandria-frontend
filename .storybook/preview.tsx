import type { Preview } from "@storybook/react";

import { withThemeFromJSXProvider } from "@storybook/addon-themes";

import { withActions } from "@storybook/addon-actions/decorator";

import {
  CssVarsProvider,
  GlobalStyles,
  withThemeRegistry,
} from "../src/app/registry";

import nextIntl from "./next-intl";

const preview: Preview = {
  initialGlobals: {
    locale: "pt",
    locales: {
      en: "English",
      pt: "Portuguese",
    },
  },

  parameters: {
    nextIntl,
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true,
    },
  },

  decorators: [
    withActions,
    withThemeRegistry,
    withThemeFromJSXProvider({
      themes: {},
      defaultTheme: "light",
      Provider: CssVarsProvider,
      GlobalStyles,
    }),
  ],
};

export default preview;
