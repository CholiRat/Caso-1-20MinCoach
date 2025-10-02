import CommonUser from './CommonUser';
import CoachUser from './CoachUser';
import Session from './Session';

class RequestedSession {
    public commonUser: CommonUser;
    public coachUser: CoachUser;
    public postTime: Date;
    public isAccepted: boolean;

    constructor(commonUser: CommonUser, coachUser: CoachUser) {
        this.commonUser = commonUser;
        this.coachUser = coachUser;
        this.postTime = new Date();
        this.isAccepted = false;
    }

    // Getters
    public getCommonUser(): CommonUser {
        return this.commonUser;
    }

    public getCoachUser(): CoachUser {
        return this.coachUser;
    }

    public getPostTime(): Date {
        return this.postTime;
    }

    public getIsAccepted(): boolean {
        return this.isAccepted;
    }

    // Setters
    public setCommonUser(commonUser: CommonUser): void {
        this.commonUser = commonUser;
    }

    public setCoachUser(coachUser: CoachUser): void {
        this.coachUser = coachUser;
    }

    public setPostTime(postTime: Date): void {
        this.postTime = postTime;
    }

    public setIsAccepted(isAccepted: boolean): void {
        this.isAccepted = isAccepted;
    }

    // Método para aceptar la solicitud y devolver una sesión
    public acceptRequest(): Session {
        this.isAccepted = true;
        
        return new Session({
            sessionID: Math.floor(Math.random() * 10000), // ID de ejemplo
            commonUser: this.commonUser,
            coachUser: this.coachUser,
            postTime: this.postTime
        });
    }
}

export default RequestedSession;
