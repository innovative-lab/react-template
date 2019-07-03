import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';


const intialState = {
    token: null,
    userId: null,
    error: null,
    isLoading: false
};

const signupStart = ( state, action ) => {
    return updateObject( state, { error: null, isloading: true } );
};

const signupSucess = (state, action) => {
    return updateObject( state, { 
        token: action.idToken,
        userId: action.userId,
        error: null,
        isLoading: false
     } );
};

const signupFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        isLoading: false
    });
}


const reducer = ( state = intialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SIGN_UP_START: return signupStart(state, action);
        case actionTypes.SIGN_UP_SUCCESS: return signupSucess(state, action);
        case actionTypes.SIGN_UP_FAIL: return signupFail(state, action);
        default:
            return state;
    }
};
export default reducer;

