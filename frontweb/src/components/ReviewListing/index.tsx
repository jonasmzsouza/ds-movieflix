import ReviewCard from 'components/ReviewCard';
import { Review } from 'types/review';
import './styles.css';

type Props = {
  reviews: Review[];
};

const ReviewListing = ({ reviews }: Props) => {
  return (
    <div className="base-card review-listing-container">
      {reviews.map((review) => {
        return(
          <ReviewCard review={review} key={review.id} />
        );
      })
    }
    </div>
  );
};

export default ReviewListing;
