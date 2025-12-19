export async function getHomeData(lang = "vi") {
  const url = `https://admin.coinjdg.com/wp-json/toan/v1/home?lang=${lang}`;

  const res = await fetch(url, {
    next: { revalidate: 30 },
  });

  if (!res.ok) throw new Error("Failed to fetch API");

  return res.json();
}

export async function getSearchData(keyword: string, lang = "vi") {
  if (!keyword || !keyword.trim()) {
    return {
      status: "empty",
      posts: [],
    };
  }

  const url = `https://admin.coinjdg.com/wp-json/toan/v1/search?keyword=${encodeURIComponent(
    keyword
  )}&lang=${lang}`;

  try {
    const res = await fetch(url, {
      cache: "no-store", // search KHÔNG cache
    });

    const data = await res.json();

    if (!res.ok || data?.status === "error") {
      return {
        status: "error",
        posts: [],
        message: data?.message || "Search failed",
      };
    }

    return data;
  } catch (error) {
    console.error("Search API error:", error);
    return {
      status: "error",
      posts: [],
      message: "Network error",
    };
  }
}


export async function getCategoriesWithPosts(lang = "vi") {
  const url = `https://admin.coinjdg.com/wp-json/toan/v1/categories-with-posts?lang=${lang}`;

  const res = await fetch(url, {
    next: { revalidate: 30 }, // ISR cache 30s
  });

  if (!res.ok) {
    throw new Error("Failed to fetch categories with posts");
  }

  return res.json();
}

export async function getSeriesData(lang = "vi") {
  const url = `https://admin.coinjdg.com/wp-json/toan/v1/series?lang=${lang}`;

  const res = await fetch(url, {
    next: { revalidate: 30 }, // ISR cache 30s
  });

  if (!res.ok) {
    throw new Error("Failed to fetch series data");
  }

  return res.json();
}

export async function getReportData(lang = "vi") {
  const url = `https://admin.coinjdg.com/wp-json/toan/v1/report?lang=${lang}`;

  const res = await fetch(url, {
    next: { revalidate: 30 },
  });

  if (!res.ok) throw new Error("Failed to fetch API");

  return res.json();
}

export async function getCoursesData(lang = "vi") {
  const url = `https://admin.coinjdg.com/wp-json/toan/v1/courses?lang=${lang}`;

  const res = await fetch(url, {
    next: { revalidate: 30 },
  });

  if (!res.ok) throw new Error("Failed to fetch API");

  return res.json();
}

export async function getSerieData(slug: string, lang = "vi") {
  const url = `https://admin.coinjdg.com/wp-json/toan/v1/series/${slug}?lang=${lang}`;

  const res = await fetch(url, {
    next: { revalidate: 30 },
  });

  if (!res.ok) throw new Error("Failed to fetch API");

  return res.json();
}


export async function getCourseData(slug: string, lang = "vi") {
  const url = `https://admin.coinjdg.com/wp-json/toan/v1/course?slug=${slug}&lang=${lang}`;

  const res = await fetch(url, {
    next: { revalidate: 30 },
  });

  if (!res.ok) throw new Error("Failed to fetch API");

  return res.json();
}


export async function getPostData(slug: string, lang = "vi") {
  const url = `https://admin.coinjdg.com/wp-json/toan/v1/post-detail?slug=${slug}&lang=${lang}`;

  const res = await fetch(url, {
    next: { revalidate: 30 },
  });

  if (!res.ok) throw new Error("Failed to fetch API");

  return res.json();
}


export async function getPostByCategory(
  slug: string,
  lang: "vi" | "en",
  limit = 8
) {
  const res = await fetch(
    `https://admin.coinjdg.com/wp-json/toan/v1/post-by-category?slug=${slug}&lang=${lang}&limit=${limit}`,
    {
      // cache server-side tốt cho SEO
      next: { revalidate: 300 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch post-by-category");
  }

  return res.json();
}
