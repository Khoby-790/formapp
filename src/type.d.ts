interface IQuiz {
  title: String;
  deadline: Date;
}

interface IForm {
  title: String;
  deadline: Date;
  questions: IQuestion[];
}

type QuizesState = {
  quizes: IQuiz[];
};

type QuizAction = {
  type: String;
  quiz: IQuiz;
};

type FormAction = {
  type: String;
  form: IForm;
};

type Argument = QuizAction | FormAction;

type DispatchType = (args: Argument) => Argument;
