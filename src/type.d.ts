interface IQuiz {
  title: String;
  deadline: Date;
}

interface IQuestion {

};

interface IForm {
  title: String;
  deadline: Date;
  published: Boolean;
  questions: IQuestion[];
}

type QuizesState = {
  quizes: IQuiz[];
};

type FormState = {
  forms: IForm[];
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

type AppState = QuizesState | FormState;
type AppAction = QuizAction | FormAction;
