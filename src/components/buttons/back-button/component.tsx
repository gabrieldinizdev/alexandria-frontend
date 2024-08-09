"use client";

import { forwardRef, useCallback } from "react";

import { useRouter } from "next/navigation";

import { IconButton, type IconButtonProps } from "../icon";

type BackButtonProps = Readonly<{ href?: string }> & IconButtonProps;

export const BackButton = forwardRef<HTMLButtonElement, BackButtonProps>(
  ({ href, ...props }, ref) => {
    const router = useRouter();

    const navigate = useCallback(
      () => (href ? router.push(href) : router.back()),
      [href, router]
    );

    const handleClick = () => {
      navigate();
    };

    return <IconButton onClick={handleClick} {...props} ref={ref} />;
  }
);

BackButton.displayName = "BackButton";
