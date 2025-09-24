// demoLogs.jsx
import { useLogger } from './useLogger';
import * as Sentry from '@sentry/react';

// Initialize Sentry at the app level
Sentry.init({
  dsn: "https://7b74e3446139975f93e558503e5b8848@o4510071643832320.ingest.us.sentry.io/4510071645536256"
});

function DemoLogs() {
  const logger = useLogger('DemoLogs');

  // Example function to trigger an error and log it
  const handleError = () => {
    try {
      throw new Error('Test error');
    } catch (error) {
      // strategy: specifies the logging strategy
      // message: the log message
      // metadata: optional metadata
      logger.error('sentry', 'An error occurred', { error: error.message, code: '123', stack: error.stack });
    }
  };

  return (
    <div>
      <h1>Example for logs</h1>
      <button onClick={handleError}>
        Trigger Error
      </button>
    </div>
  );
}

export default DemoLogs;