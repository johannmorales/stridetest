import {RequestHandler} from 'express';
import {logger as baseLogger} from '../lib';

export const logger: RequestHandler = (req, res, next) => {
  req.logger = baseLogger.child({
    requestId: req.id,
    userSub: req.auth?.payload.sub,
  });

  req.logger.info(`${req.method} ${req.originalUrl}`);

  const start = Date.now();
  const oldSend = res.send;

  res.send = function (body) {
    const responseTime = Date.now() - start;
    const statusCode = res.statusCode;

    req.logger.info(
      `${req.method} ${req.originalUrl} - ${statusCode} (${responseTime}ms)`
    );

    return oldSend.call(this, body);
  };

  next();
};
