import { PostItem } from "./post";

interface CategoryBlock {
  category: {
    id: number;
    name: string;
    slug: string;
    url: string;
  };
  content: {
    posts: PostItem[];
  };
}
