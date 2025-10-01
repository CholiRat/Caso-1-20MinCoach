import exceptionHandler from '../exceptionHandling/exceptionHandler';

class PaymentPolicy {
    
    // Payment parameters based on user ratings
    minPayment = 3.60;        // Minimun payment (1 star)
    paymentIncrement = 0.60;  // Increase per star
    maxPayment = 5.99;        // Maximum payment (5 stars)
    
    // Subscription commissions
    starterCommission = 0.40; // 40% comission
    proCommission = 0.20;     // 20% comission
    
    // Subscription prices (in dollars)
    starterPrice = 19.99;
    proPrice = 59.99;

  constructor() {
    
  }

  // Calculate the earnings based on the rating (1 to 5 stars)
  calculateEarnings(rating) {
    let earnings = minPayment + (paymentIncrement * (Math.floor(rating) - 1));
    return Math.min(earnings, maxPayment);
  }

  // Calculate the net income for 20min coach
    calculateNetIncome(packageType, sessionCount = null) {
    switch (packageType.toLowerCase()) {
      case 'starter':
        const starterNet = this.starterPrice * this.starterCommission;
        return starterNet;
        
      case 'pro':
        const proNet = this.proPrice * this.proCommission;
        return proNet;
        
      default:
        exceptionHandler.handleException('SUBSCRIPTION_001');
    }
  }

}

export default PaymentPolicy;