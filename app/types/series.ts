// src/types/series.ts
import type { PostItem } from "@/types/post";

export interface SeriesItem {
  id: number;
  name: string;
  slug: string;
  url: string;
  image?: string;
  count: number;
  description?: string;
}

export interface SeriesResponse {
  status: string;
  lang: string;
  series: SeriesItem;
  posts: PostItem[];
  the_spotlight: string;
  more_the_spotlight: string;
  url_cua_more_the_spotlight: string | null;
  series_tags: SeriesItem[];
}
