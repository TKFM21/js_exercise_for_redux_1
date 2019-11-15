import { createStore } from 'redux';
import {
    addTodo,
    deleteTodo,
    toggleTodoCompleted
} from '../actions/todoActionCreator';
import { todoReducer } from '../reducers/todoReducer';

const store = createStore(todoReducer);

const dummey = {text: 'dummey', completed: false};
const newAction = addTodo(dummey);
const response = store.dispatch(newAction);

console.log(response);
console.log('@@@@@@@');
console.log(store.getState());
console.log('@@@@@@@');

const dummey2 = {text: 'dummey22', completed: false};
const newAction2 = addTodo(dummey2);
const response2 = store.dispatch(newAction2);

const dummey3 = {text: 'dummey33', completed: false};
const newAction3 = addTodo(dummey3);
store.dispatch(newAction3);
console.log(store.getState());
console.log('@@@@@@@');

const newAction4 = deleteTodo(1);
const response4 = store.dispatch(newAction4);
console.log(response4);
console.log('@@@@@');
console.log(store.getState());
console.log('@@@@@@');

const newAction5 = toggleTodoCompleted(0);
const response5 = store.dispatch(newAction5);
console.log(response5);
console.log('@@@@@');
console.log(store.getState());
console.log('@@@@');

export default store;