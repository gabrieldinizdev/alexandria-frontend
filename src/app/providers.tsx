import type { ReactNode } from "react";

import { ThemeRegistry } from "./registry";

type AppProvidersProps = Readonly<{
  children: ReactNode;
}>;

export function AppProviders({ children }: AppProvidersProps) {
  return <ThemeRegistry options={{ key: "joy" }}>{children}</ThemeRegistry>;
}
