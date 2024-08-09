"use server";

import type { AuthError } from "next-auth";
import { isRedirectError } from "next/dist/client/components/redirect";

import { signIn } from "@/lib/auth";
import type { LoginSchemaType } from "@/schemas/auth";

type LoginSubmitActionInput = {
  id: string;
  options: LoginSchemaType | Record<string, any>;
};

export async function LoginSubmitAction({
  id,
  options,
}: LoginSubmitActionInput) {
  try {
    await signIn(id, options);
  } catch (error) {
    const invalidCredentialsErrorMessage = "invalidCredentials";
    const somethingWentWrongErrorMessage = "somethingWentWrong";

    if (isRedirectError(error)) {
      console.warn("RedirectError", error.cause ?? error.message);

      throw error;
    }

    if (error instanceof Error) {
      const { type, cause } = error as AuthError;
      switch (type) {
        case "CredentialsSignin":
          console.error("CredentialsSignin", { cause });

          return invalidCredentialsErrorMessage;

        case "CallbackRouteError":
          console.error("CallbackRouteError", { cause });

          return invalidCredentialsErrorMessage;

        default:
          console.error("DefaultError", { error });

          return somethingWentWrongErrorMessage;
      }
    }

    console.error("DefaultError", { error });

    throw error;
  }
}
