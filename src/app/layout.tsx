import type { ReactNode } from "react";

import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { Quicksand } from "next/font/google";

import { AppProviders } from "./providers";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alexandria",
  description: "Alexandria ~ Livraria",
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default async function RootLayout({ children }: RootLayoutProps) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <AppProviders>
      <NextIntlClientProvider messages={messages}>
        <html lang={locale}>
          <body className={quicksand.className}>{children}</body>
        </html>
      </NextIntlClientProvider>
    </AppProviders>
  );
}
