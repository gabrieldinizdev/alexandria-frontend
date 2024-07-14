"use client";

import { useState, type ReactNode } from "react";

import { useServerInsertedHTML } from "next/navigation";

import { CssVarsProvider, CssBaseline, GlobalStyles } from "@mui/joy";

import createCache, { Options } from "@emotion/cache";
import { CacheProvider } from "@emotion/react";

import { MintTheme } from "@/themes/sky";

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
      <CssVarsProvider theme={MintTheme} defaultMode="light">
        <GlobalStyles
          styles={{
            ".svg-inline--fa": {
              color: "var(--Icon-color)",
              margin: "var(--Icon-margin)",
              fontSize: "var(--Icon-fontSize, 20px)",
              width: "1em",
              height: "1em",
            },

            "*::selection": {
              backgroundColor: "var(--joy-palette-primary-solidBg)",
            },
          }}
        />

        <CssBaseline />

        {children}
      </CssVarsProvider>
    </CacheProvider>
  );
}
