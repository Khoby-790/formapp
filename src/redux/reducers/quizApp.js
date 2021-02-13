import { ADD_TODO } from "../types";

const initialState = {
    todos: []
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                todos: [...state.todos, action.payload]
            }
        default:
            return state
    }
}