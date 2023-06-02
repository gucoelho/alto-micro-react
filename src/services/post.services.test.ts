import { describe, expect, test, beforeEach, vi } from 'vitest';
import { createPost, getAllPosts, getPostById, LOCAL_STORAGE_KEY } from './posts.service';
import * as uuid from 'uuid'
import { Post } from '@models';

describe('getAllPosts', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('returns an empty array if no data is stored', () => {
    const posts = getAllPosts();

    expect(posts).toEqual([]);
  });

  test('returns parsed data from localStorage', () => {
    const mockPosts = [{ id: 1, title: 'Post 1' }, { id: 2, title: 'Post 2' }];
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(mockPosts));

    const posts = getAllPosts();

    expect(posts).toEqual(mockPosts);
  });
});

describe('getPostById', () => {
  const mockPosts = [
    { id: '1', title: 'Post 1' },
    { id: '2', title: 'Post 2' },
    { id: '3', title: 'Post 3' },
  ];

  beforeEach(() => {
    localStorage.clear()
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(mockPosts))
  });

  test('returns the post with the matching id', () => {
    const postId = '2';
    const expectedPost = { id: '2', title: 'Post 2' };

    const post = getPostById(postId);

    expect(post).toStrictEqual(expectedPost);
  });

  test('returns undefined if the post with the given id is not found', () => {
    const postId = '4';

    const post = getPostById(postId);

    expect(post).toBeUndefined();
  });
});

describe('createPost', () => {
  const mockPosts = [
    { id: '1', title: 'Post 1' },
    { id: '2', title: 'Post 2' },
  ];

  const mockNewPost = { title: 'New Post', body: 'Lorem ipsum dolor sit amet.' };


  beforeEach(() => {
    localStorage.clear()
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(mockPosts))
    vi.clearAllMocks()
  });

  test('adds the new post to the list of posts', () => {
    const mockUpdatedPosts = [...mockPosts, { id: expect.any(String), ...mockNewPost }];

    createPost(mockNewPost);

    const newStorage = localStorage.getItem(LOCAL_STORAGE_KEY);

    expect(JSON.parse(newStorage!)).toEqual(mockUpdatedPosts)
  });

  test('generates a unique id for the new post', () => {
    const mockUuid = vi.fn()
    vi.spyOn(uuid, 'v4').mockImplementation(mockUuid)

    const mockId = "random"
    mockUuid.mockReturnValue(mockId)

    createPost(mockNewPost)

    const newStorage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)!) as Post[]
    const newPost = newStorage.find(x => x.id === mockId)

    expect(newPost).toBeTruthy();
  });
});
