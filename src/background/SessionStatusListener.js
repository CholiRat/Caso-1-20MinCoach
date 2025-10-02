import { webState } from '../stateManagement/WebState.js';             
import IRealTimeListener from './IRealTimeListener';
import logger from '../logging/Logger';
import { LogLevel } from '../logging/LogLevel';

class SessionStatusListener extends IRealTimeListener {
  constructor() {
    super();
  }

  update() {
    // Obtain sessionDetails with WebSocket/API 
    const sessionData = null; // Placeholder for actual data fetching logic

    if (sessionData) {
      webState.setActiveSession(sessionData);     // Updates webState
      webState.notify();                          // Notify webState subscribers
      
      logger.log('console', LogLevel.INFO, {
        message: 'Session status updated from real-time source'});
    }
  }

}

const sessionStatusListener = new SessionStatusListener();
export default sessionStatusListener;