import {createLogger, format, transports} from 'winston';

export const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp({format: 'YYYY-MM-DDTHH:mm:ss'}),
    format.printf(({timestamp, level, message, requestId, userSub}) => {
      return `[${timestamp}] [id:${requestId}] ${level}: [sub:${userSub ?? 'unknown'}] ${message}`;
    })
  ),
  transports: [new transports.Console()],
});
