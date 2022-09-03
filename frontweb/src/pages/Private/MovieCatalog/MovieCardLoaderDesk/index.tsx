import ContentLoader from 'react-content-loader';

import './styles.css';

const MovieCardLoaderDesk = () => (
  <div className="movie-card-loader-desk">
    <ContentLoader
      speed={2}
      width={1120}
      height={330}
      viewBox="0 0 1120 330"
      backgroundColor="#6C6C6C"
      foregroundColor="#525252"
    >
      <rect x="0" y="0" rx="4" ry="4" width="262" height="318.25" />
      <rect x="286" y="0" rx="4" ry="4" width="262" height="318.25" />
      <rect x="572" y="0" rx="4" ry="4" width="262" height="318.25" />
      <rect x="858" y="0" rx="4" ry="4" width="262" height="318.25" />
    </ContentLoader>
  </div>
);

export default MovieCardLoaderDesk;
