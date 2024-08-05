import type {
  HttpClient,
  HttpRequest,
  HttpResponse,
} from "@/interfaces/adapters";

export class FetchHttpClientAdapter implements HttpClient {
  private readonly baseURL!: string;

  private readonly DEFAULT_HEADERS = {
    "Content-Type": "application/json",
  };

  public constructor() {
    this.baseURL = process.env.BASE_URL || "";

    if (!this.baseURL) {
      throw new Error("Base URL is required", {
        cause:
          '"FetchHttpClientAdapter" not found the "BASE_URL" environment variable',
      });
    }
  }

  public async request<ResponseType = unknown, RequestType = unknown>({
    method,
    path,
    headers,
    body,
  }: HttpRequest<RequestType>): Promise<HttpResponse<ResponseType>> {
    const requestInit: RequestInit = {
      method,
      headers: {
        ...this.DEFAULT_HEADERS,
        ...headers,
      },
      body: body && JSON.stringify(body),
    };

    const url = `${this.baseURL}/${path}`;
    const response = await fetch(url, requestInit);

    const data = await response.json();

    return {
      status: response.status,
      data,
    };
  }
}
