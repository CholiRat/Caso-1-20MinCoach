// Logger.js
import { ConsoleLogger } from './ConsoleLogger';
import { SentryLogger } from './SentryLogger';

class Logger {
  static instance = null;
  strategy = null;

  constructor() {
    if (Logger.instance) {
      return Logger.instance;
    }

    Logger.instance = this;
    this.strategy = new ConsoleLogger();
  }

  static getInstance() {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  setStrategy(strategy) {
    switch(strategy) {
      case 'sentry':
        this.strategy = new SentryLogger();
        break;
      case 'console':
      default:
        this.strategy = new ConsoleLogger();
        break;
    }
  }

  log(strategy, level, message, metadata) {
    this.setStrategy(strategy);
    const logEntry = {
      timestamp: new Date(),
      message,
      level,
      metadata
    };
    this.strategy.log(logEntry);
  }
}

// Create a singleton instance
const logger = Logger.getInstance();

export default logger;