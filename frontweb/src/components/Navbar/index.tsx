import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTokenData, isAuthenticated } from 'utils/auth';
import { removeAuthData } from 'utils/storage';
import history from 'utils/history';
import { AuthContext } from 'AuthContext';

import './styles.css';

const Navbar = () => {
  const { authContextData, setAuthContextData } = useContext(AuthContext);

  useEffect(() => {
    if (isAuthenticated()) {
      setAuthContextData({
        authenticated: true,
        tokenData: getTokenData(),
      });
    } else {
      setAuthContextData({
        authenticated: false,
      });
    }
  }, [setAuthContextData]);

  const handleLogoutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    removeAuthData();
    setAuthContextData({
      authenticated: false,
    });
    history.replace('/');
  };

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary main-nav">
      <div className="container-fluid">
        <Link to={'/'} className="nav-logo-text">
          <h1>MovieFlix</h1>
        </Link>
        <div className="logout-container">
          {authContextData.authenticated && (
            <a href="#logout" onClick={handleLogoutClick}>
              Sair
            </a>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
