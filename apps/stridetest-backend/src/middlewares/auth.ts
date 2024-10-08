import {RequestHandler} from 'express';
import {nanoid} from 'nanoid';

export const auth: RequestHandler = (req, res, next) => {
  req.id = nanoid();
  const error = new Error(`Not Found = ${req.originalUrl}`);
  res.status(404);
  next(error);
};
