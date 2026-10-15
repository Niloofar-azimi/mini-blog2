
const BASE_URL = "https://jsonplaceholder.typicode.com";

export async function apiClient<T>(
  endpoint: string
): Promise<T> {
  const response = await fetch(`${BASE_URL}${endpoint}`);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data: T = await response.json();

  return data;
}
