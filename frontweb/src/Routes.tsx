import Navbar from 'components/Navbar';
import PrivateRoute from 'components/PrivateRoute';
import Home from 'pages/Home';
import MovieCatalog from 'pages/Private/MovieCatalog';
import MovieDetails from 'pages/Private/MovieDetails';
import { Route, Router, Switch } from 'react-router-dom';
import history from 'utils/history';

const Routes = () => {
  return (
    <Router history={history}>
      <Navbar />
      <Switch>
        <Route path={'/'} exact>
          <Home />
        </Route>
        <PrivateRoute path={'/movies'}>
          <Route path={'/movies'} exact>
            <MovieCatalog />
          </Route>
          <Route path={'/movies/:movieId'}>
            <MovieDetails />
          </Route>
        </PrivateRoute>
      </Switch>
    </Router>
  );
};

export default Routes;
