import { Router } from 'express';
import homeRouter from './home.routes';
import usersRouter from './users.routes';
import postsRouter from './posts.routes';
import flightsRouter from './flights.routes'

// Create a new Router instance
const router = Router();

// Mount the routers
router.use('/', homeRouter);
router.use('/users', usersRouter);
router.use('/posts', postsRouter);
router.use('/flights', flightsRouter);

export default router;