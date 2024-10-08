import {RequestHandler} from 'express';
import {nanoid} from 'nanoid';

export const requestid: RequestHandler = (req, res, next) => {
  req.id = nanoid(10);
  next();
};
