"use client";

import { forwardRef, memo, useMemo, useState } from "react";

import { useTranslations } from "next-intl";

import { IconButton, Tooltip } from "@mui/joy";

import { Eye, EyeSlash } from "@phosphor-icons/react";

import { IconBase } from "@/components/icons";
import { Info } from "@/components/texts";

import { InputBase, type InputBaseProps } from "../base";

function withPasswordView(Component: typeof InputBase) {
  const PasswordView = forwardRef<HTMLInputElement, InputBaseProps>(
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
                <IconBase icon={iconType} />
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

type InputPasswordProps = Readonly<{
  base: typeof InputBase;
}> &
  InputBaseProps;

export const InputPassword = memo(
  forwardRef<HTMLInputElement, InputPasswordProps>(
    ({ base, ...props }: InputPasswordProps, ref) => {
      const TheInput = useMemo(() => withPasswordView(base), [base]);

      return <TheInput {...props} ref={ref} />;
    }
  )
);

InputPassword.displayName = "InputPassword";
