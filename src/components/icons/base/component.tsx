import { forwardRef } from "react";

import { type Icon as IconBase, type IconProps } from "@phosphor-icons/react";

export type IconBaseProps = Readonly<{
  icon: IconBase;
}> &
  IconProps;

export const Icon = forwardRef<SVGSVGElement, IconBaseProps>(
  ({ icon: IconComponent, ...props }: IconBaseProps, ref) => {
    return (
      <IconComponent className="ph-icon-react" size={24} {...props} ref={ref} />
    );
  }
);

Icon.displayName = "Icon";
