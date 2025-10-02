import CommonUser from './CommonUser';
import Session from './Session';
import Review from './Review';
import IReviewBuilder from './IReviewBuilder';
import CoachUser from './CoachUser';

class ReviewBuilder implements IReviewBuilder {
    public reviewID!: number;
    public author!: CommonUser;
    public coach!: CoachUser;
    public session!: Session;
    public rating!: number;
    public content!: string;

    constructor() {
        this.reset();
    }

    public reset(): void {
        this.reviewID = Math.floor(Math.random() * 10000);
        this.content = '';
        this.rating = 0;
    }

    public setAuthor(author: CommonUser): this {
        this.author = author;
        return this;
    }

    public setCoach(coach: CoachUser): this {
        this.coach = coach;
        return this;
    }

    public setSession(session: Session): this {
        this.session = session;
        return this;
    }

    public setRating(rating: number): this {
        if (rating < 1 || rating > 5) {
            throw new Error("El rating debe estar entre 1 y 5.");
        }
        this.rating = rating;
        return this;
    }

    public setContent(content: string): this {
        this.content = content;
        return this;
    }

    public getResult(): Review {
        if (!this.author || !this.session || !this.rating) {
            throw new Error("Faltan datos para crear la reseña (autor, sesión o rating).");
        }
        const review = new Review(this);
        this.reset();
        return review;
    }
}

export default ReviewBuilder;