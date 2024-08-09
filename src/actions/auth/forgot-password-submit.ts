"use server";

import { FetchHttpClientAdapter } from "@/adapters/gateways";
import { AuthGateway } from "@/gateways/auth";
import { ForgotPasswordInput } from "@/interfaces/inputs";

export async function ForgotPasswordSubmitAction({
  email,
}: ForgotPasswordInput) {
  const httpClient = new FetchHttpClientAdapter();
  const gateway = new AuthGateway(httpClient);

  try {
    const response = await gateway.forgotPassword({ email });

    if (response.error) {
      console.error(response.error);
    }

    return response;
  } catch (error) {
    console.error(error);
  }
}
