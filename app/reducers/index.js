// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import board from './board';

const rootReducer = combineReducers({
  counter,
  board,
  router,
});

export default rootReducer;
