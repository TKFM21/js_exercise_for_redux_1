import store, { reducers } from '../../store/index';

describe('store/index TEST', () => {
    describe('初期値を確認', () => {
        it('todosはから配列、visibleFilterはSHOW_ALL', () => {
            const mockAction = {};
            const defaultState = reducers(undefined, mockAction);
            expect( store.getState() ).toStrictEqual(defaultState);

            const { todos, visibleFilter } = store.getState();
            expect( Array.isArray(todos) ).toStrictEqual(true);
            expect( todos.length ).toStrictEqual(0);
            expect( visibleFilter ).toStrictEqual('SHOW_ALL');
        });
    });
});