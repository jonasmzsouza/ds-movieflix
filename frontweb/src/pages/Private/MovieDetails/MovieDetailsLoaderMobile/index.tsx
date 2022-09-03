import ContentLoader from 'react-content-loader';

import './styles.css';

const MovieDetailsLoaderMobile = () => (
  <div className="movie-details-loader-mobile">
    <ContentLoader
      speed={2}
      width={280}
      height={566}
      viewBox="0 0 280 566"
      backgroundColor="#6C6C6C"
      foregroundColor="#525252"
    >
      <rect x="0" y="0" rx="4" ry="4" width="280" height="546.88" />
    </ContentLoader>
  </div>
);

export default MovieDetailsLoaderMobile;
