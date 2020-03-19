import {combineReducers} from 'redux';

import moviesList from './movies-list.reducer';

export default () => combineReducers({
  moviesList,
})