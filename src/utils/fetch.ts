import { ApiResponse } from "@/types/api-response";

export async function fetcher<TOuput = any>(input: RequestInfo, init?: RequestInit): Promise<TOuput> {
  const res = await fetch(input, init);
  return res.json();
}

export async function fetchApi<TData = any>(input: RequestInfo | URL, init?: RequestInit | undefined) {
  const data = await fetch(`http://localhost:3000/api${input}`, {
    ...init,
    headers: { "Content-Type": "application/json" },
  });
  return (await data.json()) as ApiResponse<TData>;
}
