import { combineReducers } from "redux";
import quizesReducer from './quizApp';

const reducers = combineReducers({
    quizes: quizesReducer
})

export default reducers;