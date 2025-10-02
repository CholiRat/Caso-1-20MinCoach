import UserContact from './UserContact';

abstract class User {
    protected firstName: string;
    protected lastName: string;
    protected avatarURL: string;
    protected userContacts: UserContact[];
    protected totalSessions: number;

    constructor(data: {
        firstName: string;
        lastName: string;
        avatarURL: string;
        userContacts?: UserContact[];
        totalSessions?: number;
    }) {
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.avatarURL = data.avatarURL;
        this.userContacts = data.userContacts || [];
        this.totalSessions = data.totalSessions || 0;
    }

    // Getters
    public getFirstName(): string {
        return this.firstName;
    }

    public getLastName(): string {
        return this.lastName;
    }

    public getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    public getAvatarURL(): string {
        return this.avatarURL;
    }

    public getUserContacts(): UserContact[] {
        return this.userContacts;
    }

    public getTotalSessions(): number {
        return this.totalSessions;
    }

    // Setters
    public setFirstName(firstName: string): void {
        this.firstName = firstName;
    }

    public setLastName(lastName: string): void {
        this.lastName = lastName;
    }

    public setAvatarURL(avatarURL: string): void {
        this.avatarURL = avatarURL;
    }

    public setUserContacts(userContacts: UserContact[]): void {
        this.userContacts = userContacts;
    }

    public setTotalSessions(totalSessions: number): void {
        this.totalSessions = totalSessions;
    }
}

export default User;
