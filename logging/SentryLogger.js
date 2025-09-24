// SentryLogger.js
import * as Sentry from '@sentry/react';
import { ILogStrategy } from './ILogStrategy';

export class SentryLogger extends ILogStrategy {
  log(logEntry) {
    const { level, message, metadata, timestamp } = logEntry;
    
    const eventData = {
      message,
      level: level.toLowerCase(),
      timestamp,
      extra: metadata
    };

    Sentry.captureEvent(eventData);
  }
}