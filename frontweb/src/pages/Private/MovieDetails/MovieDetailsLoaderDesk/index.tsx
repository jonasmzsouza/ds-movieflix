import ContentLoader from 'react-content-loader';

import './styles.css';

const MovieDetailsLoaderDesk = () => (
  <div className="movie-details-loader-desk">
    <ContentLoader
      speed={2}
      width={1120}
      height={475}
      viewBox="0 0 1120 475"
      backgroundColor="#6C6C6C"
      foregroundColor="#525252"
    >
      <rect x="0" y="0" rx="4" ry="4" width="1120" height="435.34" />
    </ContentLoader>
  </div>
);

export default MovieDetailsLoaderDesk;
