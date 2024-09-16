"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";

import { useTranslations } from "next-intl";

import { Stack } from "@mui/joy";

import { zodResolver } from "@hookform/resolvers/zod";
import { Envelope } from "@phosphor-icons/react";

import { ForgotPasswordSubmitAction } from "@/actions/auth/forgot-password-submit";
import { ButtonSolid } from "@/components/buttons";
import { IconBase } from "@/components/icons";
import { InputOutlined } from "@/components/inputs";
import { SnackbarSuccess } from "@/components/snackbars";
import {
  ForgotPasswordSchema,
  ForgotPasswordSchemaType,
} from "@/schemas/auth/forgot-password";

export function FormForgotPassword() {
  const namespaceCommon = "Auth.Common";
  const namespaceForgotPassword = "Auth.ForgotPassword";

  const t = useTranslations();
  const [isPending, startTransition] = useTransition();

  const [messageErrorSnackbar, setMessageErrorSnackbar] = useState("");
  const isDisabled = isPending;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordSchemaType>({
    resolver: zodResolver(ForgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = ({ email }: ForgotPasswordSchemaType) => {
    startTransition(async () => {
      await ForgotPasswordSubmitAction({
        email,
      });

      setMessageErrorSnackbar(
        t(`${namespaceForgotPassword}.emailSentSuccessfully`)
      );
    });
  };

  return (
    <Stack
      className="Logrm"
      component="form"
      gap={5}
      width="100%"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Stack gap={2} alignItems="stretch">
        <InputOutlined
          name="email"
          control={control}
          error={errors.email && t(errors.email?.message)}
          placeholder={t(`${namespaceCommon}.emailFieldPlaceholder`)}
          startDecorator={<IconBase icon={Envelope} size={24} />}
        />
      </Stack>

      <Stack gap={2}>
        <ButtonSolid disabled={isDisabled} loading={isPending} type="submit">
          {t(`${namespaceForgotPassword}.sendEmail`)}
        </ButtonSolid>
      </Stack>

      <SnackbarSuccess
        open={messageErrorSnackbar.length > 0}
        onClose={() => setMessageErrorSnackbar("")}
        autoHideDuration={6000}
      >
        {messageErrorSnackbar}
      </SnackbarSuccess>
    </Stack>
  );
}
