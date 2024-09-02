"use client";

import { useTransition } from "react";

import { LogoutSubmitAction } from "@/actions/auth";
import { ButtonSolid } from "@/components/buttons";
import { Title } from "@/components/headings";

export default function HomePage() {
  const [isPending, startTransition] = useTransition();

  const logout = () => {
    startTransition(async () => {
      await LogoutSubmitAction({
        options: { redirectTo: "/auth/sign-in" },
      });
    });
  };

  return (
    <div>
      <Title>HOME PAGE</Title>

      <ButtonSolid loading={isPending} disabled={isPending} onClick={logout}>
        Sair
      </ButtonSolid>
    </div>
  );
}
