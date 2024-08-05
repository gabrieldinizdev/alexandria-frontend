export interface HttpResponse<DataType> {
  status: number;
  data: DataType;
}
