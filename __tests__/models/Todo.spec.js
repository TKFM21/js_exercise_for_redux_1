import Todo from '../../models/Todo';

describe('models/Todo TEST', () => {
    describe('cunstructor', () => {
        it('インスタンスを作成すると2つのプロパティが存在', () => {
            const dummy = 'dummy';
            const newTodo = new Todo(dummy);
            expect( newTodo instanceof Todo ).toStrictEqual(true);
            expect( typeof newTodo._text ).toStrictEqual('string');
            expect( typeof newTodo._completed ).toStrictEqual('boolean');
            expect( newTodo._text ).toStrictEqual(dummy);
            expect( newTodo._completed ).toStrictEqual(false);
        });
    });
    describe('getter text', () => {
        it('ゲッターで_textプロパティを取得', () => {
            const dummy = 'dummy';
            const newTodo = new Todo(dummy);
            expect( newTodo.text ).toStrictEqual(dummy);
        });
    });
    describe('hasCompleted', () => {
        it('_completedプロパティを取得', () => {
            const dummy = 'dummy';
            const newTodo = new Todo(dummy);
            expect( newTodo.hasCompleted() ).toStrictEqual(false);
            newTodo._completed = true;
            expect( newTodo.hasCompleted() ).toStrictEqual(true);
            newTodo._completed = false;
            expect( newTodo.hasCompleted() ).toStrictEqual(false);
        });
    });
    describe('toggleTodoCompleted', () => {
        it('_completedプロパティが反転する', () => {
            const dummy = 'dummy';
            const newTodo = new Todo(dummy);
            expect( newTodo._completed ).toStrictEqual(false);
            newTodo.toggleTodoCompleted()
            expect( newTodo._completed ).toStrictEqual(true);
            newTodo.toggleTodoCompleted()
            expect( newTodo._completed ).toStrictEqual(false);
        });
    });
});