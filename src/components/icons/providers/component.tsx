import { useMemo } from "react";

import { faGithubAlt, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ProviderIconProps = {
  provider: string;
};

export function ProvidersIcon({ provider }: ProviderIconProps) {
  const icon = useMemo(() => {
    switch (provider) {
      case "github":
        return faGithubAlt;

      case "google":
        return faGoogle;

      default:
        return null;
    }
  }, [provider]);

  if (!icon) return <></>;

  return <FontAwesomeIcon icon={icon} />;
}
