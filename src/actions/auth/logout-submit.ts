"use server";

import type { AuthError } from "next-auth";
import { isRedirectError } from "next/dist/client/components/redirect";

import { signOut } from "@/lib/auth";

type LoginSubmitActionInput = {
  options: {
    redirectTo: string;
  };
};

export async function LogoutSubmitAction({ options }: LoginSubmitActionInput) {
  try {
    await signOut(options);
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }

    if (error instanceof Error) {
      const { type, cause } = error as AuthError;
      switch (type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        case "CallbackRouteError":
          return cause?.err?.toString();
        default:
          return "Something went wrong.";
      }
    }

    throw error;
  }
}
