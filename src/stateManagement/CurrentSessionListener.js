import { webState } from '../stateManagement/WebState.js';             
import IWebStateListener from '../stateManagement/IWebStateListener';
import logger from '../logging/Logger';
import { LogLevel } from '../logging/LogLevel';

class CurrentSessionListener extends IWebStateListener {
  constructor() {
    super();
    webState.subscribe(this);              
  }

  update(webState) {
    const session = webState.getActiveSession();
    
    if (session) {
      logger.log('console', LogLevel.INFO, {message: 'A session is currently active'})
    } else {
      logger.log('console', LogLevel.INFO, {message: 'A session is currently inactive'})
    }
  }
}
const currentSessionListener = new CurrentSessionListener();
export default currentSessionListener;

