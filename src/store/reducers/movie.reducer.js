import { MOVIE_ACTION_TYPES } from 'store/actions/movie.actions'

const initialState = {};

export default (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case MOVIE_ACTION_TYPES.MOVIE_SET_STATE:
      return {
        ...payload,
      };
    case MOVIE_ACTION_TYPES.MOVIE_CLEAR_STATE:
      return initialState;
    default:
      return state;
  }
}