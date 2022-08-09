import './assets/styles/custom.scss';
import './App.css';
import Navbar from 'components/Navbar';
import MovieCatalog from 'pages/Private/MovieCatalog';

const App = () => {
  return (
    <>
      <Navbar />
      <MovieCatalog />
    </>
  );
};

export default App;
