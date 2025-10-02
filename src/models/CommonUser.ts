import User from './User';

class CommonUser extends User {
    public availableSessions: number;

    constructor(data: {
        firstName: string;
        lastName: string;
        avatarURL: string;
        availableSessions: number;
    }) {
        super(data);
        this.availableSessions = data.availableSessions;
    }

    // Getter
    public getAvailableSessions(): number {
        return this.availableSessions;
    }

    // Setter
    public setAvailableSessions(availableSessions: number): void {
        this.availableSessions = availableSessions;
    }
}

export default CommonUser;
