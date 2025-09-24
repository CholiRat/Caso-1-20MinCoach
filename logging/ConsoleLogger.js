// ConsoleLogger.js
import { ILogStrategy } from './ILogStrategy';

export class ConsoleLogger extends ILogStrategy {
  log(logEntry) {
    const { level, message, metadata, timestamp } = logEntry;
    console.log(`[${timestamp.toISOString()}] ${level}: ${message}`, metadata || '');
  }
}