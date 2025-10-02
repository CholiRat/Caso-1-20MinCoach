import CommonUser from './CommonUser';
import CoachUser from './CoachUser';

/**
 * Representa una sesión de coaching (activa o finalizada).
 */
class Session {
    public sessionID: number;
    public commonUser: CommonUser;
    public coachUser: CoachUser;
    public postTime: Date;
    public isFinished: boolean;
    public duration: number;

    constructor(data: {
        sessionID: number;
        commonUser: CommonUser;
        coachUser: CoachUser;
        postTime: Date;
    }) {
        this.sessionID = data.sessionID;
        this.commonUser = data.commonUser;
        this.coachUser = data.coachUser;
        this.postTime = data.postTime;
        this.isFinished = false;
        this.duration = 0; // Se podría actualizar con un temporizador
    }

    // Getters
    public getSessionID(): number {
        return this.sessionID;
    }

    public getCommonUser(): CommonUser {
        return this.commonUser;
    }

    public getCoachUser(): CoachUser {
        return this.coachUser;
    }

    public getPostTime(): Date {
        return this.postTime;
    }

    public getIsFinished(): boolean {
        return this.isFinished;
    }

    public getDuration(): number {
        return this.duration;
    }

    // Setters
    public setSessionID(sessionID: number): void {
        this.sessionID = sessionID;
    }

    public setCommonUser(commonUser: CommonUser): void {
        this.commonUser = commonUser;
    }

    public setCoachUser(coachUser: CoachUser): void {
        this.coachUser = coachUser;
    }

    public setPostTime(postTime: Date): void {
        this.postTime = postTime;
    }

    public setIsFinished(isFinished: boolean): void {
        this.isFinished = isFinished;
    }

    public setDuration(duration: number): void {
        this.duration = duration;
    }
}

export default Session;
