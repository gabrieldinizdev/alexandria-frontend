"use client";

import { useTranslations } from "next-intl";

import { Stack } from "@mui/joy";

import { FormLogin } from "@/components/forms";
import { Jumbo, Subtitle } from "@/components/headings";

export default function SignInPage() {
  const t = useTranslations("Auth.Login");

  return (
    <>
      <Stack
        alignItems="center"
        justifyContent="center"
        p={2}
        gap={1}
        width="100%"
      >
        <Jumbo>Alexandria</Jumbo>

        <Stack alignItems="center">
          <Subtitle>{t("subtitlePage_01")}</Subtitle>
          <Subtitle>Faça seu login</Subtitle>
        </Stack>
      </Stack>

      <FormLogin />
    </>
  );
}
