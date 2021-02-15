interface IQuiz {
  title: String;
  deadline: Date;
}

type QuizesState = {
  quizes: IQuiz[];
};

type QuizAction = {
  type: String;
  quiz: IQuiz;
};

type FormAction = {};

type Argument = QuizAction | FormAction;

type DispatchType = (args: Argument) => Argument;
