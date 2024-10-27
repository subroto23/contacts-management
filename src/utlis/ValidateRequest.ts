import { NextFunction, Request, Response } from 'express';
import { AnyZodObject } from 'zod';
import CatchAsync from './CatchAsync';

const ValidateRequest = (schema: AnyZodObject) => {
  return CatchAsync(async (req: Request, res: Response, next: NextFunction) => {
    //Validation check if all data is valid then send to the controller
    await schema.parseAsync({
      body: req.body,
    });
    return next();
  });
};

export default ValidateRequest;
