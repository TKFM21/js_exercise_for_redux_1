import {
    ADD_TODO,
    DELETE_TODO,
    TOGGLE_TODO_COMPLETED
} from '../actions/constants';

export const todoReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                action.todo
            ];
        case DELETE_TODO:
            return state.filter( (todo, index) => {
                return action.index !== index;
            });
        case TOGGLE_TODO_COMPLETED:
            const stateCopy = state;
            stateCopy[action.index].completed = !state[action.index].completed;
            return stateCopy;
        default:
            return state;
    }
};