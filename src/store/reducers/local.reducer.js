import {LOCAL_ACTION_TYPES} from 'store/actions/local.actions'

const initialState = "en";

export default (state = initialState, action) => {
  const {type, payload} = action;
  if (type === LOCAL_ACTION_TYPES.LOCAL_SET_STATE) {
    return payload;
  } else {
    return state
  }
}