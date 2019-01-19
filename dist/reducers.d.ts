import { IBST } from './models';
import { BstActions } from './actions';
export declare const insert: (currentState: IBST, a: any) => IBST;
export declare const remove: (currentState: IBST, a: any) => IBST;
export declare const reducerMap: {
    [BstActions.INSERT]: (currentState: IBST, a: any) => IBST;
    [BstActions.REMOVE]: (currentState: IBST, a: any) => IBST;
};
