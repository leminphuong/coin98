export interface PostItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  avatar?: string;
  author?: string;
  date: string;
  readTime: string;
  authors?: {
    title: string | undefined;
    id: number;
    name: string;
    slug: string;
    avatar: string;
    url: string;
  }[];
}


export interface AuthorItem {
  id: string | number;
  name: string;
  slug: string;
  avatar: string; // URL ảnh tác giả
}


export interface PostSingleItem {
  slug: string;
  title: string;

  /* ========= BASIC ========= */
  image: string; // thumbnail
  anh_doan_1_trong_content?: string;

  excerpt: string;
  description?: string;

  date: string; // "36 days ago"
  readTime: string; // "14 min read"

  /* ========= CONTENT ========= */
  content: string; // HTML content

  /* ========= AUTHORS ========= */
  authors: {
    id: number;
    slug: string;
    name: string;
    avatar: string;
    url: string;
  }[];

  /* ========= SOCIAL ========= */
  link_xcom?: string;

  /* ========= RELATED ========= */
  bai_viet_lien_quan: PostItem[];

    categories?: {
    id: number;
    name: string;
    slug: string;
    url: string;
  }[];
}
