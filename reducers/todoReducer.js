import {
    ADD_TODO,
    DELETE_TODO,
    TOGGLE_TODO_COMPLETED
} from '../actions/todoActionCreator';
import Todo from '../models/Todo';

export const todoReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return state.concat(new Todo(action.text));
        case DELETE_TODO:
            return state.filter( (todo, index) => {
                return action.index !== index;
            });
        case TOGGLE_TODO_COMPLETED:
                state[action.index].toggleTodoCompleted();
            return state;
        default:
            return state;
    }
};