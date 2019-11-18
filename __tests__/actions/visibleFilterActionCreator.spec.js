import {
    SHOW_ALL,
    SHOW_ACTIVE,
    SHOW_COMPLETED,
    showAll,
    showActive,
    showCompleted
} from '../../actions/visibleFilterActionCreator';

describe('action/visibleFilterActionCreator TEST', () => {
    describe('showAll', () => {
        it('typeキーにSHOW_ALLがreturnされる', () => {
            expect( showAll() ).toStrictEqual({ type: SHOW_ALL });
        });
    });
    describe('showActive', () => {
        it('typeキーにSHOW_ACTIVEがreturnされる', () => {
            expect( showActive() ).toStrictEqual({ type: SHOW_ACTIVE });
        });
    });
    describe('showCompleted', () => {
        it('typeキーにSHOW_COMPLETEDがreturnされる', () => {
            expect( showCompleted() ).toStrictEqual({ type: SHOW_COMPLETED });
        });
    });
});