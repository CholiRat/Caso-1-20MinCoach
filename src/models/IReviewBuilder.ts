import CommonUser from './CommonUser';
import Session from './Session';
import Review from './Review';
import CoachUser from './CoachUser';


interface IReviewBuilder {

    reset(): void;

    setAuthor(author: CommonUser): this;

    setCoach(coach: CoachUser): this;

    setSession(session: Session): this;

    setRating(rating: number): this;

    setContent(content: string): this;

}

export default IReviewBuilder;