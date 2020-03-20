import {combineReducers} from 'redux';

import moviesListState from './movies-list.reducer';
import movieState from './movie.reducer';
import processingState from './processing.reducer'

export default () => combineReducers({
  moviesListState,
  movieState,
  processingState
})