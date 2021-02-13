import { ADD_QUIZ } from "../types";


// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch (action.type) {
        case ADD_QUIZ:
            return {
                todos: [...state.todos, action.payload]
            }
        default:
            return state
    }
}