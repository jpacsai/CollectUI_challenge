import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFoundPage from './8_404/NotFoundPage';
import routes from '../routes';

import './App.css';

const App = () => {
  const renderRoute = props => {
    const path = props.match.path;
    const route = routes.find(route => route.path === path);
    if (!route) return null;
    window.scrollTo(0, 0);
    const { component: Component } = route;
    return <Component />;
  };

  return (
    <div className="App">
      <Router>
        <Switch>
          {routes.map(({ path, exact }) => (
            <Route key={path} path={path} exact={exact} render={renderRoute} />
          ))}
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
