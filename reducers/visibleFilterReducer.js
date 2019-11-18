import {
    SHOW_ALL,
    SHOW_ACTIVE,
    SHOW_COMPLETED
} from '../actions/visibleFilterActionCreator';

export const visibleFilterReducer = (todos = [], action) => {
    switch (action.type) {
        case SHOW_ALL:
            return todos;
        case SHOW_ACTIVE:
            return todos.filter( todo => !todo._completed );
        case SHOW_COMPLETED:
            return todos.filter( todo => todo._completed );
        default:
            return todos;
    }
};