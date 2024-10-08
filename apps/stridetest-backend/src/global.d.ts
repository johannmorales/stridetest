import {Pageable} from 'typeorm-dynamodb';
import {Logger} from 'winston';

export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      [key: string]: string | undefined;
      /**
       * Application port the app will run in
       */
      API_PORT?: string;
      NODE_ENV?: 'dev' | 'prod';
    }
  }
}

declare global {
  namespace Express {
    export interface Request {
      pageable: Pageable;
      id: string;
      logger: Logger;
    }
  }
}
