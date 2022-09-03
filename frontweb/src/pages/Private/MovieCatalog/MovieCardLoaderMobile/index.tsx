import ContentLoader from 'react-content-loader';

import './styles.css';

const MovieCardLoaderMobile = () => (
  <div className="movie-card-loader-mobile">
    <ContentLoader
      speed={2}
      width={300}
      height={340}
      viewBox="0 0 300 340"
      backgroundColor="#6C6C6C"
      foregroundColor="#525252"
    >
      <rect x="0" y="0" rx="4" ry="4" width="300" height="339.64" />
    </ContentLoader>
  </div>
);

export default MovieCardLoaderMobile;
