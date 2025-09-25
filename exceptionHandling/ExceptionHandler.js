// exceptionHandler.js
import ExceptionCatalog from './ExceptionCatalog.js';
import logger from '../logging/Logger';
import { LogLevel } from '../logging/LogLevel';

class ExceptionHandler {
  
  static instance = null;
  static catalog = null;

  constructor() {
    if (ExceptionHandler.instance) {
      return ExceptionHandler.instance;
    }
    
    this.catalog = ExceptionCatalog; 
    ExceptionHandler.instance = this;
  }

  static getInstance() {
  if (!ExceptionHandler.instance) {
      ExceptionHandler.instance = new ExceptionHandler();
  }
    return ExceptionHandler.instance;
  }

  getMessage(errorCode){
    const errorInfo = this.catalog.get(errorCode);
    
    if (errorInfo) {
      return errorInfo; 
    }
    
    // Fallback if the error does not exist
    return this.catalog.get('UNKNOWN_001');
  }

  handleException(errorCode){
    
    const errorEntry = this.getMessage(errorCode);

    switch (errorEntry.level) {
      case 'DEBUG':
        logger.log('sentry', LogLevel.DEBUG, errorEntry);
        break;
      case 'WARN':
        logger.log('sentry', LogLevel.WARN, errorEntry);
        break;
      case 'ERROR':
        logger.log('sentry', LogLevel.ERROR, errorEntry);
        break;
      case 'FATAL':
        logger.log('sentry', LogLevel.FATAL, errorEntry);
        break;
      default:
        logger.log('sentry', LogLevel.WARN, errorEntry);
        break;
    }
  
  }
}

const exceptionHandler = ExceptionHandler.getInstance();

export default exceptionHandler;

