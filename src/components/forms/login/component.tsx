"use client";

import { useState, useTransition } from "react";
import { useForm, useFormState } from "react-hook-form";

import { useTranslations } from "next-intl";

import { Box, Stack } from "@mui/joy";

import { zodResolver } from "@hookform/resolvers/zod";
import { Envelope, LockKey } from "@phosphor-icons/react";

import { LoginSubmitAction } from "@/actions/auth";
import { OutlinedButton, SolidButton } from "@/components/buttons";
import { Title } from "@/components/headings";
import { Icon, ProvidersIcon } from "@/components/icons";
import { OutlinedInput, PasswordInput } from "@/components/inputs";
import { Link } from "@/components/link";
import { ErrorSnackbar } from "@/components/snackbars";
import { Small } from "@/components/texts";
import { providersList } from "@/lib/auth";
import { loginSchema, type LoginSchema } from "@/schemas/auth";

const PendingProvider = new Set<string>();

export function LoginForm() {
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
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const {} = useFormState({ control });

  const onSubmit = (data: LoginSchema) => {
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
        <OutlinedInput
          name="email"
          control={control}
          error={errors.email && t(errors.email?.message)}
          placeholder={t(`${namespaceCommon}.emailFieldPlaceholder`)}
          startDecorator={<Icon icon={Envelope} size={24} />}
        />

        <PasswordInput
          base={OutlinedInput}
          name="password"
          control={control}
          error={errors.password && t(errors.password?.message)}
          placeholder={t(`${namespaceCommon}.passwordFieldPlaceholder`)}
          startDecorator={<Icon icon={LockKey} size={24} />}
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
        <SolidButton disabled={isDisabled} loading={isPending} type="submit">
          {t(`${namespaceLogin}.loginButton`)}
        </SolidButton>

        <Box width="100%" display="flex" justifyContent="center">
          <Title>{t(`${namespaceLogin}.or`)}</Title>
        </Box>

        {providersList.map((provider) => (
          <Box key={JSON.stringify(provider)} width="100%">
            <OutlinedButton
              disabled={isDisabled}
              loading={isPendingProviders && PendingProvider.has(provider.id)}
              sx={{
                ".MuiButton-startDecorator": {
                  position: "absolute",
                  left: 0,
                  paddingInline: "1rem",
                },
              }}
              startDecorator={<ProvidersIcon provider={provider.id} />}
              onClick={() => {
                PendingProvider.add(provider.id);

                loginWithProvider(provider.id);
              }}
            >
              {t(`${namespaceCommon}.signInWith`, { provider: provider.name })}
            </OutlinedButton>
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

      <ErrorSnackbar
        open={messageErrorSnackbar.length > 0}
        onClose={() => setMessageErrorSnackbar("")}
      >
        {messageErrorSnackbar}
      </ErrorSnackbar>
    </Stack>
  );
}
