"use client";

import Lottie from "react-lottie-player";

import { useTranslations } from "next-intl";

import { Box, Stack } from "@mui/joy";

import NotFoundAnimation from "@/animations/common/not-found.json";
import { Subtitle, Title } from "@/components/headings";
import { Paragraph } from "@/components/texts";

export default function NotFountPage() {
  const t = useTranslations("Shared.NotFound");

  return (
    <Stack
      minHeight="100vh"
      minWidth="100vw"
      justifyContent="center"
      alignItems="center"
      gap={1}
    >
      <Box p={4}>
        <Title textAlign="center">{t("title")}</Title>
      </Box>

      <Box p={4}>
        <Lottie
          loop
          animationData={NotFoundAnimation}
          play
          style={{ width: "100%", maxWidth: "600px" }}
        />
      </Box>

      <Stack p={2} gap={2}>
        <Subtitle textAlign="center">{t("subtitle")}</Subtitle>
        <Paragraph textAlign="center">{t("description")}</Paragraph>
      </Stack>
    </Stack>
  );
}
