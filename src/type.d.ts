interface IQuiz {
  title: String;
  deadline: Date;
}

type QuizesState = {
  quizes: [IQuiz?];
};

type QuizAction = {
  type: String;
  quiz: IQuiz;
};

type DispatchType = (args: QuizAction) => QuizAction;
