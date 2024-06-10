import { Request, Response, NextFunction } from 'express';
import Joi, { ValidationError, ValidationResult } from 'joi';

export const postSchema = Joi.object({
  id: Joi.number().integer().required(),
  title: Joi.string().required(),
  content: Joi.string().required().min(10),
});

export const validatePost = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result: ValidationResult =
    postSchema.validate( req.body, { abortEarly: false } );

  if (result.error) {
    return res.status(422).json({
      message: 'Invalid post data',
      errors: result.error.details.map(err => err.message),
    });
  }

  next();
};