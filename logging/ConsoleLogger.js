// ConsoleLogger.js
import { ILogStrategy } from './ILogStrategy';

export class ConsoleLogger extends ILogStrategy {
  log(logEntry) {
    const { timestamp, message, level, logInfo } = logEntry;
    console.log(`[${timestamp.toISOString()}] ${level}: ${message}`, logInfo || '');
  }
}