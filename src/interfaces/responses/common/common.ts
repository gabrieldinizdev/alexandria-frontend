export interface CommonResponse {
  data: any;
  error?: {
    message: string;
    error: string;
    statusCode: number;
  };
}
