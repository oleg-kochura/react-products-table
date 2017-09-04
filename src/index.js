import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/common/index.scss';

const history = createBrowserHistory();

// render main React component
const render = (Component, props = {}) => {
  ReactDOM.render(
    <AppContainer>
      <Component {...props} />
    </AppContainer>
, document.getElementById('app'));
};

render(App, { history });

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => {
    render(App, { history });
  });
}
