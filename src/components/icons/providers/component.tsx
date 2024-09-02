import { forwardRef, useMemo } from "react";

import { GithubLogo, GoogleLogo } from "@phosphor-icons/react";

import { IconBase, type IconBaseProps } from "../base";

type IconProviderProps = Readonly<{
  provider: string;
}> &
  Omit<IconBaseProps, "icon">;

export const IconProviders = forwardRef(
  ({ provider, ...props }: IconProviderProps, ref) => {
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

    return <IconBase icon={icon} {...props} />;
  }
);

IconProviders.displayName = "IconProviders";
