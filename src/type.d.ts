interface IQuiz {
  title: String;
  deadline: Date;
}

type AnswerType = "mcq" | "written";
interface IQuestion {
  questionText: String;
  answerType: AnswerType;
  answer?: String;
}

interface IResponse {
  questionText: String;
  answer: String;
  correct?: Boolean;
}

interface IForm {
  title: String;
  deadline: Date;
  published: Boolean;
  questions?: IQuestion[];
  response?: IResponse[];
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

interface AppState {
  quiz: QuizesState;
  form: FormState;
}
type AppAction = QuizAction | FormAction;
