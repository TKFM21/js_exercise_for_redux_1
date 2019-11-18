import { createStore, combineReducers } from 'redux';
import { todoReducer } from '../reducers/todoReducer';
import { visibleFilterReducer } from '../reducers/visibleFilterReducer';

export const reducers = combineReducers({
    todos: todoReducer,
    visibleFilter: visibleFilterReducer
});

const store = createStore(reducers);

export default store;