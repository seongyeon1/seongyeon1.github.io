export type Category = "study" | "paper-review" | "project" | "tutorial";

export type Frontmatter = {
  title: string;
  date: string;
  summary: string;
  category: Category;
  tags: string[];
  series?: string;
  seriesOrder?: number;
  draft?: boolean;
  math?: boolean;
  thumbnail?: string;
};

export type Post = Frontmatter & {
  slug: string;
  content: string;
  readingTime: string;
};

export type Heading = {
  id: string;
  text: string;
  level: number;
};
