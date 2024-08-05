import { HttpMethod, type HttpClient } from "@/interfaces/adapters";
import type { LoginInput } from "@/interfaces/inputs";
import type { LoginRequest } from "@/interfaces/requests";
import type { LoginResponse } from "@/interfaces/responses";

export class AuthGateway {
  private readonly httpClient!: HttpClient;

  public constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  public async login(data: LoginInput): Promise<LoginResponse> {
    const method = HttpMethod.POST;
    const path = "auth/login";

    const response = await this.httpClient.request<LoginResponse, LoginRequest>(
      { method, path, body: data }
    );

    return response.data;
  }
}
