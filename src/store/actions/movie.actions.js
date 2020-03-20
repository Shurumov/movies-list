import { changeProcessing } from 'store/actions/processing.actions';

export const MOVIE_ACTION_TYPES = {
  MOVIE_SET_STATE: 'MOVIE_SET_STATE',
  MOVIE_CLEAR_STATE: 'MOVIE_CLEAR_STATE'
};

export const setData = news => ({
  type: MOVIE_ACTION_TYPES.MOVIE_SET_STATE,
  payload: news
});

export const getMovieData = (methodUrl) => {
  return async (dispatch, getState, getAxios) => {
    const axios = getAxios();

    dispatch(changeProcessing(true));

    const response = await axios.get(methodUrl);

    dispatch(changeProcessing(false));
    if (!response || response.Response === "False") {
      alert(response.Error);
      return;
    }

    dispatch(setData(response));

    return response;
  };
};

export const clearState = () => {
  return {
    type: MOVIE_ACTION_TYPES.MOVIE_CLEAR_STATE,
  };
};