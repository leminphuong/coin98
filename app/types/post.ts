export interface PostItem {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  avatar?: string;
  author?: string;
  date: string;
  readTime: string;
  authors?: { name: string; avatar: string }[];
}
