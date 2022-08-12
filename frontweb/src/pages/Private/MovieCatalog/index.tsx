import { Link } from 'react-router-dom';
import './styles.css';

const MovieCatalog = () => {
  return (
    <div className="catalog-container">
      <h2>Tela de listagem de filmes</h2>
      <div className="catalog-content-container">
        <Link to={'/movies/1'}>Acessar /movies/1</Link>
        <Link to={'/movies/2'}>Acessar /movies/2</Link>
      </div>
    </div>
  );
};

export default MovieCatalog;
