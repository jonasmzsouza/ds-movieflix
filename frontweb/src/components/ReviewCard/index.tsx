import { ReactComponent as Star } from 'assets/images/star.svg';
import { Review } from 'types/review';
import './styles.css';

type Props = {
  review: Review;
};

const ReviewCard = ({ review }: Props) => {
  return (
    <div className="review-card-container">
      <div className="review-name-container">
        <Star />
        <h3>{review.user.name}</h3>
      </div>
      <div className="review-elavuation-container">
        <p>{review.text}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
