import { ReactComponent as Star } from 'assets/images/star.svg';
import './styles.css';

const ReviewCard = () => {
  return (
    <div className="review-card-container">
      <div className="review-name-container">
        <Star />
        <h3>Maria Silva</h3>
      </div>
      <div className="review-elavuation-container">
        <p>Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.</p>
      </div>
    </div>
  );
};

export default ReviewCard;
