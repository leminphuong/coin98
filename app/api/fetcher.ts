type FetchResult<T> = {
  status: "success" | "error";
  data: T | null;
  message?: string;
};

export async function safeFetch<T>(
  url: string,
  options?: RequestInit & { revalidate?: number }
): Promise<FetchResult<T>> {
  try {
    const res = await fetch(url, {
      ...options,
      next: options?.revalidate
        ? { revalidate: options.revalidate }
        : undefined,
    });

    if (!res.ok) {
      console.error("API failed:", url, res.status);
      return { status: "error", data: null };
    }

    const data = await res.json();
    return { status: "success", data };
  } catch (error) {
    console.error("API network error:", url, error);
    return { status: "error", data: null };
  }
}
