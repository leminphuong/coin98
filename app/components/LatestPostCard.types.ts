export interface Author {
  name?: string;
  avatar: string;
}

export interface LatestPostCardProps {
  href: string;
  title: string;
  excerpt?: string;
  image: string;
  readTime?: string;
  date: string;
  authors: Author[];
}
