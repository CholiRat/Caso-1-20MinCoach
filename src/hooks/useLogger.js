// useLogger.js
import { useCallback } from 'react';
import logger from '../logging/Logger';
import { LogLevel } from '../logging/LogLevel';

export function useLogger(component) {
  const log = useCallback((strategy, level, logInfo = {}) => {
    // Add component information to metadata
    const metadata = {}
    const enhancedMetadata = {
      ...metadata,
      component
    };
    
    logger.log(strategy, level, logInfo, enhancedMetadata);
  }, [component]);

  // Convenience methods
  return {
    debug: (strategy, errorInfo) => log(strategy, LogLevel.DEBUG, errorInfo),
    info: (strategy, errorInfo) => log(strategy, LogLevel.INFO, errorInfo),
    warn: (strategy, errorInfo) => log(strategy, LogLevel.WARN, errorInfo),
    error: (strategy, errorInfo) => log(strategy, LogLevel.ERROR, errorInfo),
    fatal: (strategy, errorInfo) => log(strategy, LogLevel.FATAL, errorInfo),
    // Custom log with strategy
    log
  };
}