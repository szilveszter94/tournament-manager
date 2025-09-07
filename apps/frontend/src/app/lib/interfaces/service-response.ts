export interface ServiceResponse<T> {
  ok: boolean;
  error?: string;
  data?: T;
}