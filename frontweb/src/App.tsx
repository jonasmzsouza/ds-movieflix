import './assets/styles/custom.scss';
import './App.css';
import Navbar from 'components/Navbar';
import MovieDetails from 'pages/Private/MovieDetails';

const App = () => {
  return (
    <>
      <Navbar />
      <MovieDetails />
    </>
  );
};

export default App;
