import { Request, Response, NextFunction } from 'express';
  
  export const validateUser = (req: Request, res: Response, next: NextFunction ) => {
    const { id, name, email, password } = req.body;
    console.log(req.body)
    const errors = [];  
    if (!id) {
      errors.push('id is required');
    }
  
    if (!name) {
      errors.push('name is required');
    }
  
    if (!email) {
      errors.push('email is required');
    }
  
    if (!password) {
      errors.push('password is required');
    } else {
      if (password.length < 6) {
        errors.push('password must be at least 6 chars long');
      }
    }
  
    if (errors.length) {
      return res.status(422).json({
        message: 'Validation failed',
        errors,
      });
    }
  
    next();
  };