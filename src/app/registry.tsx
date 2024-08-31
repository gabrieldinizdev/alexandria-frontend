"use client";

import { useState, type ReactNode } from "react";

import { useServerInsertedHTML } from "next/navigation";

import { CssBaseline, CssVarsProvider, GlobalStyles } from "@mui/joy";

import createCache, { Options } from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import type { ReactRenderer } from "@storybook/react";
import type { PartialStoryFn } from "storybook/internal/types";

import { SkyTheme } from "@/themes/sky";

type ThemeRegistryProps = Readonly<{
  options: Options;
  children: ReactNode;
}>;

export function ThemeRegistry(props: ThemeRegistryProps) {
  const { options, children } = props;

  const [{ cache, flush }] = useState(() => {
    const cache = createCache(options);
    cache.compat = true;
    const prevInsert = cache.insert;
    let inserted: string[] = [];
    cache.insert = (...args) => {
      const serialized = args[1];
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name);
      }
      return prevInsert(...args);
    };
    const flush = () => {
      const prevInserted = inserted;
      inserted = [];
      return prevInserted;
    };
    return { cache, flush };
  });

  useServerInsertedHTML(() => {
    const names = flush();
    if (names.length === 0) {
      return null;
    }
    let styles = "";
    for (const name of names) {
      styles += cache.inserted[name];
    }
    return (
      <style
        key={cache.key}
        data-emotion={`${cache.key} ${names.join(" ")}`}
        dangerouslySetInnerHTML={{
          __html: styles,
        }}
      />
    );
  });

  return (
    <CacheProvider value={cache}>
      <CssVarsProvider theme={SkyTheme} defaultMode="light">
        <GlobalStyles
          styles={{
            ".ph-icon-react": {
              color: "var(--Icon-color)",
              margin: "var(--Icon-margin)",
            },

            "html, body": {
              minHeight: "100vh",
              minWidth: "100vw",
              overflowX: "hidden",
              overflowY: "auto",
              margin: 0,
              padding: 0,
            },

            "*, *::before, *::after": {
              boxSizing: "border-box",
            },
          }}
        />

        <CssBaseline />

        {children}
      </CssVarsProvider>
    </CacheProvider>
  );
}

export const withThemeRegistry = (Story: PartialStoryFn<ReactRenderer>) => (
  <ThemeRegistry options={{ key: "storybook-joy" }}>
    <Story />
  </ThemeRegistry>
);
