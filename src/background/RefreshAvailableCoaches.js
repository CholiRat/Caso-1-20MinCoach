import { IBackgroundJobCommand } from './IBackgroundJobCommand.js';
import webState from '../stateManagement/WebState.js';
import BackgroundJobsService from '../services/BackgroundJobsService.js';

export class RefreshAvailableCoachesCommand extends IBackgroundJobCommand {
  async execute() {

    /*
    
    // Fetch data from API

    BackgroundJobsService.obtainData(availableCoaches);

    // Update WebState

    webState.setAvailableCoaches(availableCoaches);
    webState.notify();
    
      */
  }
}

export default RefreshAvailableCoachesCommand;