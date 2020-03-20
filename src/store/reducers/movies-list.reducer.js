import {MOVIES_LIST_ACTION_TYPES} from 'store/actions/movies-list.actions'

const initialState = {
  moviesList: [],
  totalResults: 0,
};

export default (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case MOVIES_LIST_ACTION_TYPES.MOVIES_LIST_SET_STATE:
      return {
        ...state,
        moviesList: payload.Search,
        totalResults: payload.totalResults,
      };
    case MOVIES_LIST_ACTION_TYPES.MOVIES_LIST_CLEAR_STATE:
      return initialState;
    default:
      return state;
  }
}