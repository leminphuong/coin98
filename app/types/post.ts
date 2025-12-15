export interface PostItem {
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
