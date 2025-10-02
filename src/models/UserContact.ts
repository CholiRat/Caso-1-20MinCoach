import { TContact } from './Enumerations';

class UserContact {
    public value: string;
    public contactType: TContact;

    constructor(value: string, contactType: TContact) {
        this.value = value;
        this.contactType = contactType;
    }


    // Setters
    public setValue(value: string): void {
        this.value = value;
    }

    public setContactType(contactType: TContact): void {
        this.contactType = contactType;
    }
}

export default UserContact;
