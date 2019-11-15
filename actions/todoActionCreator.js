import {
    ADD_TODO,
    DELETE_TODO,
    TOGGLE_TODO_COMPLETED
} from './constants';

export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        todo
    };
};

export const deleteTodo = (index) => {
    return {
        type: DELETE_TODO,
        index
    };
};

export const toggleTodoCompleted = (index) => {
    return {
        type: TOGGLE_TODO_COMPLETED,
        index
    };
};