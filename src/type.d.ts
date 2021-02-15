interface Quiz {
  title: String;
  deadline: Date;
}

type QuizesState = {
  quizes: [Quiz];
};
