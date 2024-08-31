import type { Preview } from "@storybook/react";

import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { CssVarsProvider, GlobalStyles } from "@mui/joy";

import { withActions } from "@storybook/addon-actions/decorator";

import { withThemeRegistry } from "../src/app/registry";

const preview: Preview = {
  parameters: {
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
