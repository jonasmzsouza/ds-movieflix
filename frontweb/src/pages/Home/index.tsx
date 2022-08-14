import { ReactComponent as HomeImage } from 'assets/images/home-image.svg';
import { useContext } from 'react';
import { AuthContext } from 'AuthContext';
import Login from './Login';

import './styles.css';

const Home = () => {
  const { authContextData } = useContext(AuthContext);

  return (
    <div className="home-container">
      <div className="home-banner-container">
        <h2>Avalie Filmes</h2>
        <p>
          Diga o que você achou do seu<br></br> filme favorito
        </p>
        <HomeImage />
      </div>
      <div className="home-form-container">
        {!authContextData.authenticated && <Login />}
      </div>
    </div>
  );
};

export default Home;
