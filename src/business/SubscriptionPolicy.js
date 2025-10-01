class SubscriptionPolicy {
    starterSessions = 2;
    proSessions = 8;

  constructor() {

  }

  getStarterSessions() {
    return this.starterSessions;
  }

  getProSessions() {
    return this.proSessions;
  }

  // PLACEHOLDER: Subscription cancellation business logic.
  cancelSubscription() {

  }

}

export default SubscriptionPolicy;