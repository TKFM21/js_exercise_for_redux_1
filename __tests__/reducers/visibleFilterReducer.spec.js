import { visibleFilterReducer } from '../../reducers/visibleFilterReducer';
import {
    showAll,
    showActive,
    showCompleted,
    SHOW_ALL,
    SHOW_ACTIVE,
    SHOW_COMPLETED
} from '../../actions/visibleFilterActionCreator';

describe('reducers/visibleFilterReducer TEST', () => {
    describe('SHOW_ALL', () => {
        it('SHOW_ALLがreturn', () => {
            const action = showAll();
            const newState = visibleFilterReducer(SHOW_ALL, action);
            expect( newState ).toStrictEqual(SHOW_ALL);
        });
    });
    describe('SHOW_ACTIVE', () => {
        it('SHOW_ACTIVEがreturn', () => {
            const action = showActive();
            const newState = visibleFilterReducer(SHOW_ACTIVE, action);
            expect( newState ).toStrictEqual(SHOW_ACTIVE);
        });
    });
    describe('SHOW_COMPLETED', () => {
        it('SHOW_COMPLETEDがreturn', () => {
            const action = showCompleted();
            const newState = visibleFilterReducer(SHOW_COMPLETED, action);
            expect( newState ).toStrictEqual(SHOW_COMPLETED);
        });
    });
    describe('引数:stateなし、不正action', () => {
        it('SHOW_ALLがreturn', () => {
            const action = {
                type: 'dummy'
            };
            const newState = visibleFilterReducer(undefined, action);
            expect( newState ).toStrictEqual(SHOW_ALL);
        });
    });
    describe('引数:オリジナルstate、不正action', () => {
        it('SHOW_ALLがreturn', () => {
            const action = {
                type: 'dummy'
            };
            const newState = visibleFilterReducer('original', action);
            expect( newState ).toStrictEqual(SHOW_ALL);
        });
    });
});