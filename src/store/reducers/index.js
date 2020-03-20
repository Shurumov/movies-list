import {combineReducers} from 'redux';

import moviesListState from './movies-list.reducer';
import processingState from './processing.reducer'

export default () => combineReducers({
  moviesListState,
  processingState
})