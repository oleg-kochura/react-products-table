import React from 'react';
import { Provider } from 'react-redux';
import cssModules from 'react-css-modules';
import store from './store';
import TableContainer from './containers/Table';
import FilterContainer from './containers/Filter';
import styles from './styles/app.scss';


const App = () => (
  <Provider store={store}>
    <div styleName="main-container">
      <FilterContainer/>
      <TableContainer/>
    </div>
  </Provider>
);

export default cssModules(App, styles, { allowMultiple: true });
