// useExceptionHandler.js
import { useCallback } from 'react';
import exceptionHandler from './exceptionHandler';

export function useExceptionHandler(componentName) {
  const handleException = useCallback((errorCode, context = {}) => {
    const enhancedContext = {
      ...context,
      component: componentName
    };
    
    return exceptionHandler.handleException(errorCode, enhancedContext);
  }, [componentName]);

  return {
    handleException
  };
}