import { Router } from 'express';
import {
  createPostController,
  deletePostController,
  getPostByIdController,
  getPostsController,
  updatePostController
} from '../controllers/posts.controllers';
import { validatePost } from '../utils/validations/posts.validations';

const router = Router();

// Posts routes
router.get('/', getPostsController);
router.get('/:id', getPostByIdController);
router.post('/', validatePost, createPostController);
router.put('/:id',validatePost, updatePostController);
router.delete('/:id', deletePostController);

export default router;