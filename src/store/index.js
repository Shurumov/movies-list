import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { getAxios } from 'utils/api';


export const store = createStore(
  reducers(),
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument(getAxios))),
);