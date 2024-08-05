import type { ReactNode } from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faça seu login",
  description: "Faça seu login para acessar o Alexandria.",
};

type RootAuthLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootAuthLayout({ children }: RootAuthLayoutProps) {
  return children;
}
