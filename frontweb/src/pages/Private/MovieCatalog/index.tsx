import MovieCard from 'components/MovieCard';
import { Link } from 'react-router-dom';
import './styles.css';

const MovieCatalog = () => {
  const movie = {
    id: 1,
    title: 'Bob Esponja',
    subTitle: 'O Incrível Resgate',
    year: 2020,
    imgUrl:
      'https://image.tmdb.org/t/p/w533_and_h300_bestv2/wu1uilmhM4TdluKi2ytfz8gidHf.jpg',
  };

  return (
    <div className="catalog-container">
      <div className="row">
        <div className="col-sm-6 col-xl-3 my-1" key={movie.id}>
          <div className="catalog-content-container">
            <Link to={`/movies/${movie.id}`}>
              <MovieCard movie={movie} />
            </Link>
          </div>
        </div>
        <div className="col-sm-6 col-xl-3 my-1" key={movie.id}>
          <div className="catalog-content-container">
            <Link to={`/movies/${movie.id}`}>
              <MovieCard movie={movie} />
            </Link>
          </div>
        </div>
        <div className="col-sm-6 col-xl-3 my-1" key={movie.id}>
          <div className="catalog-content-container">
            <Link to={`/movies/${movie.id}`}>
              <MovieCard movie={movie} />
            </Link>
          </div>
        </div>
        <div className="col-sm-6 col-xl-3 my-1" key={movie.id}>
          <div className="catalog-content-container">
            <Link to={`/movies/${movie.id}`}>
              <MovieCard movie={movie} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCatalog;
