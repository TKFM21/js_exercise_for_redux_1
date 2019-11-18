import { todoReducer } from '../../reducers/todoReducer';
import Todo from '../../models/Todo';
import { 
    addTodo,
    deleteTodo,
    toggleTodoCompleted
} from '../../actions/todoActionCreator';

const dummyArrayCreate = () => {
    return [1, 2, 3].map( num => {
        const dummy = 'dummy' + num;
        return new Todo(dummy);
    });
};

describe('reducers/todoReducer TEST', () => {
    describe('ADD_TODO', () => {
        it('addTodoアクションを渡すと配列にそのアクションに準じたTodoインスタンスが追加される', () => {
            const dummy = 'dummy';
            const action = addTodo(dummy);
            const initialState = [];
            const newState = todoReducer(initialState, action);
            expect( Array.isArray(newState) ).toStrictEqual(true);
            expect( newState.length ).toStrictEqual(1);
            expect( newState[0] instanceof Todo ).toStrictEqual(true);
            expect( newState[0]._text ).toStrictEqual(dummy);
            expect( newState[0]._completed ).toStrictEqual(false);
        });
    });
    describe('DELETE_TODO', () => {
        it('deleteTodoアクションを渡すとそのアクションに準じたTodoインスタンスが削除される', () => {
            const initialState = dummyArrayCreate();
            const index = 2;
            const action = deleteTodo(index);
            const newState = todoReducer(initialState, action);
            expect( Array.isArray(newState) ).toStrictEqual(true);
            expect( newState.length ).toStrictEqual(2);
            newState.forEach( (todo, index) => {
                expect( todo ).toStrictEqual(initialState[index]);
            });
        });
    });
    describe('TOGGLE_TODO_COMPLETED', () => {
        it('toggleTodoCompletedアクションを渡すと指定されたTodoインスタンスのcompletedがtrueになる', () => {
            const initialState = dummyArrayCreate();
            const expectCompletedProp = [false, false, true];
            const index = 2;
            const action = toggleTodoCompleted(index);
            const newState = todoReducer(initialState, action);
            expect( Array.isArray(newState) ).toStrictEqual(true);
            expect( newState.length ).toStrictEqual(3);
            newState.forEach( (todo, index) => {
                expect( todo._completed ).toStrictEqual(expectCompletedProp[index]);
            });
        });
    });
});