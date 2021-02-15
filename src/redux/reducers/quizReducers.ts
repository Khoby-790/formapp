import { ADD_QUIZ } from "../types/quizTypes";

const initialState: QuizesState = {
  quizes: [],
};

const reducer = (state: QuizesState = initialState, action: QuizAction) => {
  switch (action.type) {
    case ADD_QUIZ:
      return {
        ...state,
        quizes: action.quiz,
      };

    default:
      return state;
  }
};
