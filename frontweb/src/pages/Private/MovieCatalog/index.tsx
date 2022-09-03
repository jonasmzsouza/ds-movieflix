import { AxiosRequestConfig } from 'axios';
import MovieCard from 'components/MovieCard';
import MovieFilter, { MovieFilterData } from 'components/MovieFilter';
import Pagination from 'components/Pagination';
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Movie } from 'types/movie';
import { SpringPage } from 'types/vendor/spring';
import { requestBackend } from 'utils/requests';
import MovieCardLoaderDesk from './MovieCardLoaderDesk';
import MovieCardLoaderMobile from './MovieCardLoaderMobile';
import './styles.css';

type ControlComponentData = {
  activePage: number;
  filterData: MovieFilterData;
};

const MovieCatalog = () => {
  const [page, setPage] = useState<SpringPage<Movie>>();
  const [isLoading, setIsLoading] = useState(false);

  const [controlComponentData, setControlComponentData] =
    useState<ControlComponentData>({
      activePage: 0,
      filterData: { genre: null },
    });

  const handlePageChange = (pageNumber: number) => {
    setControlComponentData({
      activePage: pageNumber,
      filterData: controlComponentData.filterData,
    });
  };

  const handleSubmitFilter = (data: MovieFilterData) => {
    setControlComponentData({ activePage: 0, filterData: data });
  };

  const getMovies = useCallback(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/movies',
      params: {
        page: controlComponentData.activePage,
        size: 4,
        genreId: controlComponentData.filterData.genre?.id,
      },
      withCredentials: true,
    };

    setIsLoading(true);
    requestBackend(config)
      .then((response) => {
        setPage(response.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [controlComponentData]);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  return (
    <>
      <MovieFilter onSubmitFilter={handleSubmitFilter} />
      <div className="catalog-container">
        <div className="row">
          {isLoading ? (
            <>
              <MovieCardLoaderMobile />
              <MovieCardLoaderDesk />
            </>
          ) : (
            page?.content.map((movie) => {
              return (
                <div className="col-sm-6 col-xl-3 mb-4" key={movie.id}>
                  <div className="catalog-content-container">
                    <Link to={`/movies/${movie.id}`}>
                      <MovieCard movie={movie} />
                    </Link>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
      <Pagination
        pageCount={page ? page?.totalPages : 0}
        range={3}
        onChange={handlePageChange}
      />
    </>
  );
};

export default MovieCatalog;
