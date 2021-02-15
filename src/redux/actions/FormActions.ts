import { ADD_FORM } from "../types/formTypes";

export function addForm(form: IForm) {
  const action: FormAction = {
    type: ADD_FORM,
    form,
  };

  return (dispatch: DispatchType) => {
    dispatch(action);
  };
}
