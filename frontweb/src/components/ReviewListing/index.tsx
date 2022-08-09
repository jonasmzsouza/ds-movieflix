import ReviewCard from 'components/ReviewCard';
import './styles.css';

const ReviewListing = () => {
  return (
    <div className="base-card review-listing-container">
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
    </div>
  );
};

export default ReviewListing;
