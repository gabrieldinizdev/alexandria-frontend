"use server";

import { FetchHttpClientAdapter } from "@/adapters/gateways";
import { AuthGateway } from "@/gateways/auth";
import type { LoginInput } from "@/interfaces/inputs";

export async function LoginAction({ email, password }: LoginInput) {
  const httpClient = new FetchHttpClientAdapter();
  const gateway = new AuthGateway(httpClient);

  try {
    const response = await gateway.login({ email, password });

    return response;
  } catch (error) {
    console.error(error);
  }
}
