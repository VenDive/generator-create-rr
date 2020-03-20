import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import store from 'store';
import { ROOT } from 'configs/routeNames';
import 'styles/App.css';
import Pages from './Pages';


const history = createHistory();

const App = () => (
  <Provider store={store} history={history}>
    <Router>
      <Switch>
        <Route
          path={ROOT}
          component={Pages}
        />
      </Switch>
    </Router>
  </Provider>
);
export default App;
