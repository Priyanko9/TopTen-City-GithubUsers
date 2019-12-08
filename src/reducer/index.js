import { combineReducers } from 'redux';

import { main } from './main.reducer';
import {error} from './error.reducer';

const rootReducer = combineReducers({
  main,
  error
});

export default rootReducer;
