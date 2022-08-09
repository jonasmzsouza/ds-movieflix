import { ReactComponent as HomeImage } from 'assets/images/home-image.svg';
import Button from 'components/Button';

import './styles.css';

const Home = () => {
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
        <div className="base-card login-card">
          <h3>LOGIN</h3>
          <form>
            <div className="mb-4">
              <input
                type="text"
                className="form-control base-input"
                placeholder="Email"
                name="username"
              />
            </div>
            <div>
              <input
                type="password"
                className="form-control base-input"
                placeholder="Senha"
                name="password"
              />
            </div>
            <div className="login-submit">
              <Button text="Fazer login" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
