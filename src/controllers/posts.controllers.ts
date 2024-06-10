import { Request, Response } from 'express';
import {
  Post,
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost
} from '../models/posts.models';

export const getPostsController = (req: Request, res: Response): void => {
  const posts: Post[] = getPosts();
  res.status(200).json({ posts });
};

export const getPostByIdController = (req: Request, res: Response): void => {
  const id: number = parseInt(req.params.id, 10);
  const post: Post | undefined = getPostById(id);
  if (post) {
    res.status(200).json({ post });
  } else {
    res.status(404).json({ message: 'Post not found' });
  }
};

export const createPostController = (req: Request, res: Response): void => {
  const post: Post = req.body;
  createPost(post);
  res.status(201).json({
    message: 'Post created',
    post,
  });
};

export const updatePostController = (req: Request, res: Response): void => {
  const id: number = parseInt(req.params.id, 10);
  const postUpdate: Post = req.body;
  postUpdate.id = id;
  updatePost(postUpdate);
  res.status(200).json({
    message: 'Post updated',
    post: postUpdate,
  });
};

export const deletePostController = (req: Request, res: Response): void => {
  const id: number = parseInt(req.params.id, 10);
  deletePost(id);
  res.status(200).json({
    message: `Post ${id} deleted`,
  });
};