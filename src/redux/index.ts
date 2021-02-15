import { createStore, applyMiddleware, Store, combineReducers } from "redux";
import thunk from "redux-thunk";

import quizReducer from "./reducers/quizReducers";
import formReducer from "./reducers/formReducers";

const reducers = combineReducers({
  quiz: quizReducer,
  form: formReducer,
});

export const store: Store<AppState, AppAction> & {
  dispatch: DispatchType;
} = createStore(reducers, applyMiddleware(thunk));
