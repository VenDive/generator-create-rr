import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import store from '../redux/store';
import { ROOT } from '../configs/routeNames';<% if (ui_library == 'material') { %><% if (ui_login) { %>
import Home from '../components/SignIn';<% } } if (ui_library == 'ant') { %><% if (ui_login){ %>
import Home from '../components/login/Login';<% } } if (ui_library == 'none') { %>
import Home from '../containers/userContainer';<% } %>
import '../styles/App.css';

const history = createHistory();

const App = () => (
  <Provider store={store} history={history}>
    <Router>
      <Switch>
        <Route
          path={ROOT}
          component={Home}
        />
      </Switch>
    </Router>
  </Provider>
);
export default App;
