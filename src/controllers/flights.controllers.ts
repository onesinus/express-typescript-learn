import { Request, Response } from 'express';
import { getToken } from '../models/flights.model';
import { getDestinations } from '../models/flights.model';

export const getTokenData = (req: Request, res: Response): void => {
  getToken()
    .then(token => {
        const sessionReq = req as Request & { session: { token?: string } };
        sessionReq.session.token = token
        res.status(200).json({ token });
    }).catch(err => {
        res.status(500).json({ err })
    });
};

export const getDestinationsData = (req: Request, res: Response): void => {
    const sessionReq = req as Request & { session: { token?: string } };
    getDestinations(sessionReq.session.token)
      .then(destinations => {
          res.status(200).json({ destinations });
      }).catch(err => {
          res.status(500).json({ err })
      });
  };

