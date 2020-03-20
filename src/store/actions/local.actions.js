
export const LOCAL_ACTION_TYPES = {
  LOCAL_SET_STATE: 'LOCAL_SET_STATE',
};

export const setLocal = local => ({
  type: LOCAL_ACTION_TYPES.LOCAL_SET_STATE,
  payload: local
});