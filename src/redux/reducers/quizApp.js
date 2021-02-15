import { ADD_QUIZ } from "../types";

const initialState = {
    todos: [1]
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_QUIZ:
            return {
                todos: [...state.todos, action.payload]
            }
        default:
            return state
    }
}