// This class manages the invocation of background jobs.
export class BackgroundJobsInvoker {
  interval = 0;
  intervalId = null;
  isActivated = false;
  command = null;

  constructor() {

  }

  setInterval(pInterval) {
    const wasRunning = this.isActivated;  // Reactivate if it was running
    
    if (wasRunning) {
      this.stop();
    }

    this.interval = pInterval;

    if (wasRunning) {
      this.start(); 
    }
  }

  getInterval() {
    return this.interval;
  }

  start() {
    // Returns if already activated
    if (this.isActivated) {
      return;
    }
    
    this.isActivated = true;
    this.executeCommand();
    
    this.intervalId = setInterval(() => {
      this.step();
    }, this.interval * 1000); // Transform seconds to milliseconds

    // Log to mark start of job
  }

  stop() {
    //Returns if not activated
    if (!this.isActivated) {
      return;
    }

    this.isActivated = false;
    
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }

    // Log to mark stop of job
  }

  step() {
    if (!this.isActivated) {
      return;
    }
    this.executeCommand();
  }

    // ***********************
    // Command pattern methods
    // ***********************

  async executeCommand() {
    if (!this.command || !this.isActivated) {
      return;
    }

    try {
      await this.command.execute();
    } catch (error) {
      //Error from exception handler
    }
  }

  setCommand(pCommand) {
    this.command = pCommand;
  }

}

export default BackgroundJobsInvoker;