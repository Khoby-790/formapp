import { combineReducers } from "redux";
import quizesReducer from './quizApp';

const reducers = combineReducers({
    quiz: quizesReducer
})

export default reducers;