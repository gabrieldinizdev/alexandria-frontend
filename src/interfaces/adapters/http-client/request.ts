import type { HttpMethod } from "./methods";

export interface HttpRequest<DataType> {
  method: HttpMethod;
  path: string;
  headers?: Record<string, string>;
  body?: DataType;
}
