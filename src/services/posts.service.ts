import { v4 as uuid } from "uuid";
import { NewPost, Post } from "../models";

export const LOCAL_STORAGE_KEY = "all-posts";

const getAllPosts = (): Post[] => {
  const data = localStorage.getItem(LOCAL_STORAGE_KEY);
  return data ? (JSON.parse(data) as Post[]) : ([] as Post[]);
};

const getPostById = (id: string): Post | undefined => {
  const posts = getAllPosts();
  return posts.find((post: Post) => post.id === id);
};

const createPost = (post: NewPost): void => {
  const posts = getAllPosts();
  const id = uuid();
  const updatedPosts = [...posts, { id, ...post }];
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedPosts));
};

const editPost = (updatedPost: Post): void => {
  const posts = getAllPosts();
  const updatedPosts = posts.map((post: Post) => {
    if (post.id === updatedPost.id) {
      return { ...post, ...updatedPost };
    }
    return post;
  });
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedPosts));
};

export { getAllPosts, getPostById, createPost, editPost };
