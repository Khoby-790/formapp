import { createStore, applyMiddleware, Store } from "redux";
import thunk from "redux-thunk";

import reducer from "./reducers/quizReducers";

export const store: Store<AppState, AppAction> & {
  dispatch: DispatchType;
} = createStore(reducer, applyMiddleware(thunk));
