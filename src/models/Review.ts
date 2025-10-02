import CommonUser from './CommonUser';
import Session from './Session';
import ReviewBuilder from './ReviewBuilder';

class Review {
    public reviewID: number;
    public author: CommonUser;
    public session: Session;
    public rating: number; // de 1 a 5
    public content: string;

    constructor(builder: ReviewBuilder) {
        this.reviewID = builder.reviewID;
        this.author = builder.author;
        this.session = builder.session;
        this.rating = builder.rating;
        this.content = builder.content;
    }

    // Getters
    public getReviewID(): number {
        return this.reviewID;
    }

    public getAuthor(): CommonUser {
        return this.author;
    }

    public getSession(): Session {
        return this.session;
    }

    public getRating(): number {
        return this.rating;
    }

    public getContent(): string {
        return this.content;
    }

    // Setters
    public setReviewID(reviewID: number): void {
        this.reviewID = reviewID;
    }

    public setAuthor(author: CommonUser): void {
        this.author = author;
    }

    public setSession(session: Session): void {
        this.session = session;
    }

    public setRating(rating: number): void {
        if (rating >= 1 && rating <= 5) {
            this.rating = rating;
        } else {
            throw new Error('El rating debe estar entre 1 y 5.');
        }
    }

    public setContent(content: string): void {
        this.content = content;
    }
}

export default Review;
