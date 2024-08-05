import { forwardRef, useMemo } from "react";

import { GithubLogo, GoogleLogo } from "@phosphor-icons/react";

import { Icon, type IconBaseProps } from "../base";

type ProviderIconProps = Readonly<{
  provider: string;
}> &
  Omit<IconBaseProps, "icon">;

export const ProvidersIcon = forwardRef(
  ({ provider, ...props }: ProviderIconProps, ref) => {
    const icon = useMemo(() => {
      switch (provider) {
        case "github":
          return GithubLogo;

        case "google":
          return GoogleLogo;

        default:
          return null;
      }
    }, [provider]);

    if (!icon) return <></>;

    return <Icon icon={icon} />;
  }
);

ProvidersIcon.displayName = "ProvidersIcon";
