import CommonUser from './CommonUser';
import { TSubscription } from './Enumerations';

/**
 * Representa una suscripción activa de un usuario.
 */
class Subscription {
    public subscriber: CommonUser;
    public planType: TSubscription;
    public startDate: Date;
    public autoRenewal: boolean;
    public nextDate: Date;

    constructor(data: {
        subscriber: CommonUser;
        planType: TSubscription;
        startDate: Date;
        autoRenewal: boolean;
        nextDate: Date;
    }) {
        this.subscriber = data.subscriber;
        this.planType = data.planType;
        this.startDate = data.startDate;
        this.autoRenewal = data.autoRenewal;
        this.nextDate = data.nextDate;
    }

    // Getters
    public getSubscriber(): CommonUser {
        return this.subscriber;
    }

    public getPlanType(): TSubscription {
        return this.planType;
    }

    public getStartDate(): Date {
        return this.startDate;
    }

    public getAutoRenewal(): boolean {
        return this.autoRenewal;
    }

    public getNextDate(): Date {
        return this.nextDate;
    }

    // Setters
    public setSubscriber(subscriber: CommonUser): void {
        this.subscriber = subscriber;
    }

    public setPlanType(planType: TSubscription): void {
        this.planType = planType;
    }

    public setStartDate(startDate: Date): void {
        this.startDate = startDate;
    }

    public setAutoRenewal(autoRenewal: boolean): void {
        this.autoRenewal = autoRenewal;
    }

    public setNextDate(nextDate: Date): void {
        this.nextDate = nextDate;
    }
}

export default Subscription;
