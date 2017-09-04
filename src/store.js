import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger'
import { composeWithDevTools }  from 'redux-devtools-extension';
import mainReducer from './mainReducer';


const store = createStore(mainReducer, composeWithDevTools(applyMiddleware(thunk, logger)));

export default store;
