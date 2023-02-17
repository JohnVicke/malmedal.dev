interface ErrorMessage {
  message: string;
}

export type ApiResponse<T> = { data: T; error?: never } | { data?: never; error: ErrorMessage[] };
