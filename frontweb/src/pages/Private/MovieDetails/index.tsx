import ReviewForm from 'components/ReviewForm';
import ReviewListing from 'components/ReviewListing';
import { useParams } from 'react-router-dom';
import { hasAnyRoles } from 'utils/auth';
import './styles.css';

type UrlParams = {
  movieId: string;
};

const MovieDetails = () => {
  const { movieId } = useParams<UrlParams>();

  return (
    <div className="movie-details-container">
      <h2>Tela detalhes do filme id: {movieId}</h2>
      {hasAnyRoles(['ROLE_MEMBER']) && (
        <ReviewForm />
      )}
      <ReviewListing />
    </div>
  );
};

export default MovieDetails;
