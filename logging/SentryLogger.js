// SentryLogger.js
import * as Sentry from '@sentry/react';
import { ILogStrategy } from './ILogStrategy';

export class SentryLogger extends ILogStrategy {
  log(logEntry) {
    const { message, level, timestamp, logInfo } = logEntry;
    
    const eventData = {
      message,
      level: level.toLowerCase(),
      timestamp,
      extra: logInfo
    };

    Sentry.captureEvent(eventData);
  }
}