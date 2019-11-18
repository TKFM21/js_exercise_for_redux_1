import { 
    ADD_TODO,
    DELETE_TODO,
    TOGGLE_TODO_COMPLETED,
    addTodo,
    deleteTodo,
    toggleTodoCompleted
} from '../../actions/todoActionCreator';

describe('actions/todoActionCreator TEST', () => {
    describe('addTodo', () => {
        it('引数にstringを渡すとtextキーにstringとなってreturnされる', () => {
            const dummy = 'dummy';
            expect( addTodo(dummy) ).toStrictEqual({
                type: ADD_TODO,
                text: dummy
            });
        });
    });
    describe('deleteTodo', () => {
        it('引数にindex数値を渡すとindexキーにindex数値となってreturnされる', () => {
            const index = 1;
            expect( deleteTodo(index) ).toStrictEqual({
                type: DELETE_TODO,
                index: index
            });
        });
    });
    describe('toggleTodoCompleted', () => {
        it('引数にindex数値を渡すとindexキーにindex数値となってreturnされる', () => {
            const index = 1;
            expect( toggleTodoCompleted(index) ).toStrictEqual({
                type: TOGGLE_TODO_COMPLETED,
                index: index
            });
        });
    });
});