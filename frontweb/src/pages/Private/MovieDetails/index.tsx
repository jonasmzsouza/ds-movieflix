import ReviewForm from 'components/ReviewForm';
import ReviewListing from 'components/ReviewListing';
import './styles.css';

const MovieDetails = () => {
  return (
    <div className="movie-details-container">
      <h2>Tela detalhes do filme id: 1</h2>
      <ReviewForm />
      <ReviewListing />
    </div>
  );
};

export default MovieDetails;
