"use client";

import { useMemo, type ReactNode } from "react";
import Lottie from "react-lottie-player";

import dynamic from "next/dynamic";

import { Box, Stack } from "@mui/joy";

import { useMediaQuery } from "usehooks-ts";

import DesktopPlaceholderLoginAnimation from "@/animations/login/desktop-placeholder-login.json";
import { CardAuth } from "@/components/cards";
import {
  IS_MOBILE_BREAKPOINT,
  IS_TABLET_BREAKPOINT,
} from "@/themes/breakpoints";

type AuthLayoutProps = Readonly<{
  children: ReactNode;
}>;

function AuthLayout({ children }: AuthLayoutProps) {
  const isMobile = useMediaQuery(IS_MOBILE_BREAKPOINT);
  const isTablet = useMediaQuery(IS_TABLET_BREAKPOINT);

  const isDesktop = useMemo(() => !isMobile && !isTablet, [isMobile, isTablet]);
  const showDesktopImage = isDesktop;
  const gridAreas = showDesktopImage
    ? '"placeholder-image login-form"'
    : '"login-form"';

  return (
    <Stack
      className="AuthLayout"
      display="grid"
      width="100%"
      height="100vh"
      alignItems="center"
      sx={{
        gridTemplateAreas: gridAreas,
      }}
    >
      {/* ONLY FOR DESKTOP */}
      {showDesktopImage && (
        <Box
          className="AuthLayout__placeholder-image"
          gridArea="placeholder-image"
          height="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Lottie
            loop={false}
            animationData={DesktopPlaceholderLoginAnimation}
            play
            speed={2.5}
            style={{ width: "100%", maxWidth: "600px" }}
          />
        </Box>
      )}

      <Box
        className="AuthLayout__login-form"
        component="section"
        gridArea="login-form"
        width="100%"
        maxWidth="600px"
        height="100%"
        justifySelf="center"
        overflow={isDesktop ? "hidden" : "auto"}
        position={isDesktop ? "relative" : "fixed"}
        display={!isMobile ? "grid" : "inherit"}
        alignItems={!isMobile ? "center" : ""}
        px={isMobile ? 0 : 8}
        py={isMobile ? 0 : 8}
      >
        <CardAuth>{children}</CardAuth>
      </Box>
    </Stack>
  );
}

export default dynamic(() => Promise.resolve(AuthLayout), { ssr: false });
