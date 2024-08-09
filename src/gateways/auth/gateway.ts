import { HttpMethod, type HttpClient } from "@/interfaces/adapters";
import type { LoginInput } from "@/interfaces/inputs";
import { ForgotPasswordInput } from "@/interfaces/inputs/auth/forgot-password";
import type { LoginRequest } from "@/interfaces/requests";
import type { CommonResponse } from "@/interfaces/responses";

export class AuthGateway {
  private readonly httpClient!: HttpClient;

  public constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  public async login(data: LoginInput): Promise<CommonResponse> {
    const method = HttpMethod.POST;
    const path = "auth/login";

    const response = await this.httpClient.request<
      CommonResponse,
      LoginRequest
    >({ method, path, body: data });

    return response.data;
  }

  public async forgotPassword(
    data: ForgotPasswordInput
  ): Promise<CommonResponse> {
    const method = HttpMethod.POST;
    const path = "auth/forgot-password";

    const response = await this.httpClient.request<
      CommonResponse,
      ForgotPasswordInput
    >({ method, path, body: data });

    return response.data;
  }
}
