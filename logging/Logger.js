// Logger.js
import { ConsoleLogger } from './ConsoleLogger';
import { SentryLogger } from './SentryLogger';

class Logger {
  strategy = null;

  constructor() {
    this.setStrategy('console'); 
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

  log(strategy, level, logInfo) {
    this.setStrategy(strategy);
    const logEntry = {
      message: logInfo.message,
      level,
      timestamp: new Date(),
      logInfo
    };
    this.strategy.log(logEntry);
  }
}

// Create a singleton instance
const logger = new Logger();

export default logger;