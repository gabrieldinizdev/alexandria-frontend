"use client";

import { forwardRef, memo, useMemo, useState } from "react";

import { useTranslations } from "next-intl";

import { IconButton, Tooltip } from "@mui/joy";

import { Eye, EyeSlash } from "@phosphor-icons/react";

import { Icon } from "@/components/icons";
import { Info } from "@/components/texts";

import { BaseInput, type BaseInputProps } from "../base";

function withPasswordView(Component: typeof BaseInput) {
  const PasswordView = forwardRef<HTMLInputElement, BaseInputProps>(
    (props, ref) => {
      const t = useTranslations("Shared.Common");
      const [showPassword, setShowPassword] = useState(false);

      const tooltipMessage = useMemo(
        () => (showPassword ? "hidePassword" : "showPassword"),
        [showPassword]
      );
      const inputType = useMemo(
        () => (showPassword ? "text" : "password"),
        [showPassword]
      );
      const iconType = useMemo(
        () => (showPassword ? EyeSlash : Eye),
        [showPassword]
      );

      return (
        <Component
          {...props}
          type={inputType}
          endDecorator={
            <Tooltip title={<Info>{t(tooltipMessage)}</Info>} arrow>
              <IconButton onClick={() => setShowPassword((prev) => !prev)}>
                <Icon icon={iconType} />
              </IconButton>
            </Tooltip>
          }
          ref={ref}
        />
      );
    }
  );

  PasswordView.displayName = "PasswordView";

  return PasswordView;
}

type PasswordInputProps = Readonly<{
  base: typeof BaseInput;
}> &
  BaseInputProps;

export const PasswordInput = memo(
  forwardRef<HTMLInputElement, PasswordInputProps>(
    ({ base, ...props }: PasswordInputProps, ref) => {
      const TheInput = useMemo(() => withPasswordView(base), [base]);

      return <TheInput {...props} ref={ref} />;
    }
  )
);

PasswordInput.displayName = "PasswordInput";
