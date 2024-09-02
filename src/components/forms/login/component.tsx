"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";

import { useTranslations } from "next-intl";

import { Box, Stack } from "@mui/joy";

import { zodResolver } from "@hookform/resolvers/zod";
import { Envelope, LockKey } from "@phosphor-icons/react";

import { LoginSubmitAction } from "@/actions/auth";
import { ButtonOutlined, ButtonSolid } from "@/components/buttons";
import { Title } from "@/components/headings";
import { IconBase, IconProviders } from "@/components/icons";
import { InputOutlined, InputPassword } from "@/components/inputs";
import { Link } from "@/components/link";
import { SnackbarError } from "@/components/snackbars";
import { Small } from "@/components/texts";
import { providersList } from "@/lib/auth";
import { LoginSchema, type LoginSchemaType } from "@/schemas/auth";

const PendingProvider = new Set<string>();

export function FormLogin() {
  const t = useTranslations();
  const namespaceCommon = "Auth.Common";
  const namespaceLogin = "Auth.Login";

  const [isPending, startTransition] = useTransition();
  const [isPendingProviders, startTransitionProviders] = useTransition();

  const [messageErrorSnackbar, setMessageErrorSnackbar] = useState("");

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginSchemaType) => {
    startTransition(async () => {
      const errorMessage = await LoginSubmitAction({
        id: "credentials",
        options: { ...data, redirectTo: "/" },
      });

      if (errorMessage) {
        setMessageErrorSnackbar(t(`${namespaceLogin}.${errorMessage}`));
      } else {
        setMessageErrorSnackbar("");
      }
    });
  };

  const loginWithProvider = (provider: string) => {
    startTransitionProviders(async () => {
      const errorMessage = await LoginSubmitAction({
        id: provider,
        options: { redirectTo: "/" },
      });

      if (errorMessage) {
        setMessageErrorSnackbar(t(`${namespaceLogin}.${errorMessage}`));
      } else {
        setMessageErrorSnackbar("");
      }

      PendingProvider.delete(provider);
    });
  };

  const isDisabled = isPending || isPendingProviders;

  return (
    <Stack
      className="LoginForm"
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

        <InputPassword
          base={InputOutlined}
          name="password"
          control={control}
          error={errors.password && t(errors.password?.message)}
          placeholder={t(`${namespaceCommon}.passwordFieldPlaceholder`)}
          startDecorator={<IconBase icon={LockKey} size={24} />}
        />

        <Stack width="100%" alignItems="center">
          <Link href="/auth/forgot-password">
            <Small variant="plain" level="link" color="primary">
              {t(`${namespaceLogin}.forgotPassword`)}
            </Small>
          </Link>
        </Stack>
      </Stack>

      <Stack gap={2}>
        <ButtonSolid disabled={isDisabled} loading={isPending} type="submit">
          {t(`${namespaceLogin}.loginButton`)}
        </ButtonSolid>

        <Box width="100%" display="flex" justifyContent="center">
          <Title>{t(`${namespaceLogin}.or`)}</Title>
        </Box>

        {providersList.map((provider) => (
          <Box key={JSON.stringify(provider)} width="100%">
            <ButtonOutlined
              disabled={isDisabled}
              loading={isPendingProviders && PendingProvider.has(provider.id)}
              sx={{
                ".MuiButton-startDecorator": {
                  position: "absolute",
                  left: 0,
                  paddingInline: "1rem",
                },
              }}
              startDecorator={<IconProviders provider={provider.id} />}
              onClick={() => {
                PendingProvider.add(provider.id);

                loginWithProvider(provider.id);
              }}
            >
              {t(`${namespaceCommon}.signInWith`, { provider: provider.name })}
            </ButtonOutlined>
          </Box>
        ))}

        <Stack direction="row" justifyContent="center" gap={1} width="100%">
          <Small>Não tem conta ?</Small>

          <Link href="/auth/sign-up">
            <Small color="primary" level="link">
              Cadastre-se
            </Small>
          </Link>
        </Stack>
      </Stack>

      <SnackbarError
        open={messageErrorSnackbar.length > 0}
        onClose={() => setMessageErrorSnackbar("")}
      >
        {messageErrorSnackbar}
      </SnackbarError>
    </Stack>
  );
}
