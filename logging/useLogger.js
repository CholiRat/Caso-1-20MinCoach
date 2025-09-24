// useLogger.js
import { useCallback } from 'react';
import logger from './Logger';
import { LogLevel } from './LogLevel';

export function useLogger(component) {
  const log = useCallback((strategy, level, message, metadata = {}) => {
    // Add component information to metadata
    const enhancedMetadata = {
      ...metadata,
      component
    };
    
    logger.log(strategy, level, message, enhancedMetadata);
  }, [component]);

  // Convenience methods
  return {
    debug: (strategy, message, metadata) => log(strategy, LogLevel.DEBUG, message, metadata),
    info: (strategy, message, metadata) => log(strategy, LogLevel.INFO, message, metadata),
    warn: (strategy, message, metadata) => log(strategy, LogLevel.WARN, message, metadata),
    error: (strategy, message, metadata) => log(strategy, LogLevel.ERROR, message, metadata),
    fatal: (strategy, message, metadata) => log(strategy, LogLevel.FATAL, message, metadata),
    // Custom log with strategy
    log
  };
}