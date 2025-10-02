import User from './User';
import Review from './Review';

/**
 * Representa un coach profesional en la plataforma.
 */
class CoachUser extends User {
    public backgroundDesc: string;
    public specialties: string[];
    public tags: string[];
    public portfolioImagesURL: string[];
    public reviews: Review[];
    public isAvailable: boolean;

    constructor(data: {
        firstName: string;
        lastName: string;
        avatarURL: string;
        backgroundDesc: string;
        specialties: string[];
        isAvailable: boolean;
        tags?: string[];
        portfolioImagesURL?: string[];
        reviews?: Review[];
    }) {
        super(data);
        this.backgroundDesc = data.backgroundDesc;
        this.specialties = data.specialties;
        this.isAvailable = data.isAvailable;
        this.tags = data.tags || [];
        this.portfolioImagesURL = data.portfolioImagesURL || [];
        this.reviews = data.reviews || [];
    }

    // Getters
    public getBackgroundDesc(): string {
        return this.backgroundDesc;
    }

    public getSpecialties(): string[] {
        return this.specialties;
    }

    public getTags(): string[] {
        return this.tags;
    }

    public getPortfolioImagesURL(): string[] {
        return this.portfolioImagesURL;
    }

    public getReviews(): Review[] {
        return this.reviews;
    }

    public getIsAvailable(): boolean {
        return this.isAvailable;
    }

    public getFullName(): string {
        return super.getFullName(); // Llamando al getter de la clase base User
    }

    public getAvatarURL(): string {
        return super.getAvatarURL(); // Llamando al getter de la clase base User
    }

    // Setters
    public setBackgroundDesc(backgroundDesc: string): void {
        this.backgroundDesc = backgroundDesc;
    }

    public setSpecialties(specialties: string[]): void {
        this.specialties = specialties;
    }

    public setTags(tags: string[]): void {
        this.tags = tags;
    }

    public setPortfolioImagesURL(portfolioImagesURL: string[]): void {
        this.portfolioImagesURL = portfolioImagesURL;
    }

    public setReviews(reviews: Review[]): void {
        this.reviews = reviews;
    }

    public setIsAvailable(isAvailable: boolean): void {
        this.isAvailable = isAvailable;
    }

    public setFullName(fullName: string): void {
        const [firstName, lastName] = fullName.split(' ');
        super.setFirstName(firstName); // Llamando al setter de la clase base User
        super.setLastName(lastName); // Llamando al setter de la clase base User
    }

    public setAvatarURL(avatarURL: string): void {
        super.setAvatarURL(avatarURL); // Llamando al setter de la clase base User
    }
}

export default CoachUser;
