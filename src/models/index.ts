export interface Post {
  id: string;
  title: string;
  subtitle?: string;
  body: string;
}

export type NewPost = Omit<Post, "id">;
