import { ADD_FORM } from "../types/formTypes";

const initialState: FormState = {
  forms: [],
};

const reducer = (state: FormState = initialState, action: FormAction) => {
  switch (action.type) {
    case ADD_FORM:
      return {
        ...state,
        forms: [...state.forms, action.form],
      };

    default:
      return state;
  }
};

export default reducer;
