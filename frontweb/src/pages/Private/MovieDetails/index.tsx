import { AxiosRequestConfig } from 'axios';
import ReviewForm from 'components/ReviewForm';
import ReviewListing from 'components/ReviewListing';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Movie } from 'types/movie';
import { Review } from 'types/review';
import { hasAnyRoles } from 'utils/auth';
import { requestBackend } from 'utils/requests';
import './styles.css';

type UrlParams = {
  movieId: string;
};

const MovieDetails = () => {
  const { movieId } = useParams<UrlParams>();
  const [movie, setMovie] = useState<Movie>();
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: `/movies/${movieId}`,
      withCredentials: true,
    };

    requestBackend(config).then((response) => {
      setMovie(response.data);
    });
  }, [movieId]);

  useEffect(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: `/movies/${movieId}/reviews`,
      withCredentials: true,
    };

    requestBackend(config).then((response) => {
      setReviews(response.data);
    });
  }, [movieId]);

  const handleInsertReview = (review: Review) => {
    const clone = [...reviews];
    clone.push(review);
    setReviews(clone);
  };

  return (
    <div className="movie-details-container">
      <div className="base-card movie-details-card">
        <div className="movie-details-img-container">
          <img src={movie?.imgUrl} alt={movie?.title} />
        </div>
        <div className="movie-details-info-container">
          <h5>{movie?.title}</h5>
          <span>{movie?.year}</span>
          <h6>{movie?.subTitle}</h6>
          <p>{movie?.synopsis}</p>
        </div>
      </div>
      {hasAnyRoles(['ROLE_MEMBER']) && (
        <ReviewForm movieId={movieId} onInsertReview={handleInsertReview} />
      )}
      <ReviewListing reviews={reviews} />
    </div>
  );
};

export default MovieDetails;
