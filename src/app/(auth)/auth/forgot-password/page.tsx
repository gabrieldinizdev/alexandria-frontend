"use client";

import { useTranslations } from "next-intl";

import { Box, Stack } from "@mui/joy";

import { CaretLeft } from "@phosphor-icons/react";

import { BackButton } from "@/components/buttons/back-button";
import { FormForgotPassword } from "@/components/forms/forgot-password";
import { Subtitle, Title } from "@/components/headings";

export default function ForgotPasswordPage() {
  const t = useTranslations("Auth.ForgotPassword");

  return (
    <>
      <Stack
        alignItems="center"
        justifyContent="center"
        p={2}
        gap={1}
        width="100%"
      >
        <Box display="flex" alignSelf="flex-start">
          <BackButton icon={CaretLeft} />
        </Box>

        <Title>{t("forgotPassword")}</Title>

        <Stack alignItems="center">
          <Subtitle>{t("subtitlePage_01")}</Subtitle>
        </Stack>
      </Stack>

      <FormForgotPassword />
    </>
  );
}
