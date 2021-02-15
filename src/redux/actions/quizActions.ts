import { ADD_QUIZ, REMOVE_QUIZ } from "../types/quizTypes";

export function addQuiz(quiz: IQuiz) {
  const action: QuizAction = {
    type: ADD_QUIZ,
    quiz,
  };

  return simulateHttpRequest(action);
}

export function simulateHttpRequest(action: QuizAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action);
    }, 500);
  };
}
