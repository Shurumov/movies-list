import { changeProcessing } from 'store/actions/processing.actions';

export const MOVIES_LIST_ACTION_TYPES = {
  MOVIES_LIST_SET_STATE: 'MOVIES_LIST_SET_STATE',
  MOVIES_LIST_CLEAR_STATE: 'MOVIES_LIST_CLEAR_STATE'
};

export const setData = news => ({
  type: MOVIES_LIST_ACTION_TYPES.MOVIES_LIST_SET_STATE,
  payload: news
});

export const getMoviesList = (methodUrl) => {
  return async (dispatch, getState, getAxios) => {
    const axios = getAxios();

    dispatch(changeProcessing(true));

    const response = await axios.get(methodUrl);
    dispatch(changeProcessing(false));

    if (!response || response.Response) {
      alert(response.Error);
      return;
    }

    dispatch(setData(response));

    return response;
  };
};

export const clearState = () => {
  return {
    type: MOVIES_LIST_ACTION_TYPES.MOVIES_LIST_CLEAR_STATE,
  };
};