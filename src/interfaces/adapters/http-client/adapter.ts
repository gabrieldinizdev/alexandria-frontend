import type { HttpRequest } from "./request";
import type { HttpResponse } from "./response";

export interface HttpClient {
  request<ResponseType, RequestType>(
    data: HttpRequest<RequestType>
  ): Promise<HttpResponse<ResponseType>>;
}
