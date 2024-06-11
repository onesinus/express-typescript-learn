import { Router } from 'express';
import { getTokenData, getDestinationsData } from '../controllers/flights.controllers';

const router = Router();
router.get('/token', getTokenData);
router.get('/destinations', getDestinationsData);

export default router;