export const PROCESSING_ACTION_TYPES = {
  CHANGE_PROCESSING_STATE: 'CHANGE_PROCESSING_STATE',
};

export const changeProcessing = (state) => {
  return {
    type: PROCESSING_ACTION_TYPES.CHANGE_PROCESSING_STATE,
    payload: state,
  };
};