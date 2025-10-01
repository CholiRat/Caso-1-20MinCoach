import APITemplate from './APITemplate.js';
import * as Sentry from '@sentry/react';

class LogService extends APITemplate {

  constructor() {
    super();
    this.baseUrl = 'https://7b74e3446139975f93e558503e5b8848@o4510071643832320.ingest.us.sentry.io/4510071645536256';

  }

  // Services extended ftom APITemplate should implement their own initialize method
  initialize() {
    Sentry.init({
    dsn: this.baseUrl
    });

  }
}

export default LogService;
