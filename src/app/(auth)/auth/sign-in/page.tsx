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
        <Jumbo>{t("titlePage")}</Jumbo>

        <Stack alignItems="center">
          <Subtitle>{t("subtitlePage_01")}</Subtitle>
          <Subtitle>{t("subtitlePage_02")}</Subtitle>
        </Stack>
      </Stack>

      <FormLogin />
    </>
  );
}
