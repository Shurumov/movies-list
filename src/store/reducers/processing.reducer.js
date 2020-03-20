import { PROCESSING_ACTION_TYPES } from 'store/actions/processing.actions'

const initialState = false;

export default (state = initialState, action) => {
  const {type, payload} = action;
  if (type === PROCESSING_ACTION_TYPES.CHANGE_PROCESSING_STATE) {
    return payload;
  } else {
    return state;
  }

}