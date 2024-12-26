export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T | null;
  statusCode: number;
}

export type CreateResponse = ApiResponse<null>;
export type GetResponse<T> = ApiResponse<T>;
export type DeleteResponse = ApiResponse<null>;
