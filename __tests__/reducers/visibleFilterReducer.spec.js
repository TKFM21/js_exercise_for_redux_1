import { visibleFilterReducer } from '../../reducers/visibleFilterReducer';
import {
    showAll,
    showActive,
    showCompleted
} from '../../actions/visibleFilterActionCreator';
import { Todo } from '../../reducers/todoReducer';

describe('reducers/visibleFilterReducer TEST', () => {
    describe('SHOW_ALL', () => {
        it('todosがそのままreturn', () => {
            const initialCompleted = [false, false, true, false, true];
            const initialTodos = [1, 2, 3, 4, 5].map( (num, index) => {
                return new Todo('dummy' + num, initialCompleted[index]);
            });
            const action = showAll();
            const newTodos = visibleFilterReducer(initialTodos, action);
            expect( Array.isArray(newTodos) ).toStrictEqual(true);
            expect( newTodos.length ).toStrictEqual(5);
            expect( newTodos ).toStrictEqual(initialTodos);
        });
    });
    describe('SHOW_ACTIVE', () => {
        it('todosの_completedがfalseのものがreturn', () => {
            const initialCompleted = [false, false, true, false, true];
            const initialTodos = [1, 2, 3, 4, 5].map( (num, index) => {
                return new Todo('dummy' + num, initialCompleted[index]);
            });
            const action = showActive();
            const newTodos = visibleFilterReducer(initialTodos, action);
            expect( Array.isArray(newTodos) ).toStrictEqual(true);
            expect( newTodos.length ).toStrictEqual(3);
            newTodos.forEach( todo => {
                expect( todo._completed ).toStrictEqual(false);
            });
        });
    });
    describe('SHOW_COMPLETED', () => {
        it('todosの_completedがtrueのものがreturn', () => {
            const initialCompleted = [false, false, true, false, true];
            const initialTodos = [1, 2, 3, 4, 5].map( (num, index) => {
                return new Todo('dummy' + num, initialCompleted[index]);
            });
            const action = showCompleted();
            const newTodos = visibleFilterReducer(initialTodos, action);
            expect( Array.isArray(newTodos) ).toStrictEqual(true);
            expect( newTodos.length ).toStrictEqual(2);
            newTodos.forEach( todo => {
                expect( todo._completed ).toStrictEqual(true);
            });
        });
    });
});