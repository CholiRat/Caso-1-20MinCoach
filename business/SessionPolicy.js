class SessionPolicy {
    totalTime = 20;
    warningTime = 1;

  constructor() {

  }

  getTotalTime() {
    return this.totalTime;
  }

  getWarningTime() {
    return this.warningTime;
  }

  // PLACEHOLDER: Returns a list of coaches with the available state.
  getAvailableCoaches() {

  }

  // PLACEHOLDER: Uses the geolocation service to find the closest coach.
  findClosestCoach() {

  }

}

export default SessionPolicy;