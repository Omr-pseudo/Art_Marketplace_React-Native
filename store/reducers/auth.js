import * as actionTypes from '../actions/action-types';

import {updateObject} from '../utility';



const initialState = {

    token: null,
    userId: null,
    error: null
}



const authStart = (state,action) => {
    return updateObject(state, {error:null, loading:true});
};

const authSuccess = (state, action) => {
    return updateObject(state, {token: action.tokenId, userId: action.userId, error:null, loading:false});
};

const authFail = (state, action) => {
    return updateObject(state, {error: action.error, loading: false});
};

const autLogout = (state, action) => {
    return updateObject(state, {token: null, userId: null})
};

const onAuthRedirectPath = (state, action) => {
    return updateObject(state, {authRedirectPath: action.path})

};

const onRemoveError = (state, action) => {
    return updateObject(state, {error:null})

};



const reducer = (state={initialState},action) => {

    switch( action.type ){

        case(actionTypes.AUTH_START): return authStart(state, action);
        case(actionTypes.AUTH_SUCCESS): return authSuccess(state, action);
        case(actionTypes.AUTH_FAIL): return authFail(state, action);
        case(actionTypes.AUTH_LOGOUT): return autLogout(state, action);
        case(actionTypes.ON_REMOVE_ERROR): return onRemoveError(state, action);
        default:
            return state;
    }
}

export default reducer;