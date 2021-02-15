import { ADD_QUIZ, REMOVE_QUIZ } from "../types/quizTypes";

export function addQuiz(quiz: IQuiz) {
  const action: QuizAction = {
    type: ADD_QUIZ,
    quiz,
  };
}
