import { AxiosRequestConfig } from 'axios';
import MovieCard from 'components/MovieCard';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Movie } from 'types/movie';
import { SpringPage } from 'types/vendor/spring';
import { requestBackend } from 'utils/requests';
import './styles.css';

const MovieCatalog = () => {
  const [page, setPage] = useState<SpringPage<Movie>>();

  useEffect(() => {
    getMovies(0);
  }, []);

  const getMovies = (pageNumber: number) => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: '/movies',
      params: {
        page: pageNumber,
        size: 4,
      },
      withCredentials: true,
    };

    requestBackend(params).then((response) => {
      setPage(response.data);
    });
  };

  return (
    <div className="catalog-container">
      <div className="row">
        {page?.content.map((movie) => {
          return (
            <div className="col-sm-6 col-xl-3 my-1" key={movie.id}>
              <div className="catalog-content-container">
                <Link to={`/movies/${movie.id}`}>
                  <MovieCard movie={movie} />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieCatalog;
