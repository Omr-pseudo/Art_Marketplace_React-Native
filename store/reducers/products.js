import * as actionsTypes from '../actions/action-types';
import { updateObject } from '../utility';



const initialState = {
    products: [],
    userproducts: [],
};


const fetchUserProductStart = (state, action) => {
    
    return updateObject(state, {loading: true});
}

const fetchUserProductSuccess = (state, action) => {
    
    return updateObject( state, {loading: false, UserProduct: action.UserProduct});
}

const fetchUserProductFailed = (state, action) => {
    return updateObject(state, {loading: false})
}



const reducer = (state = initialState, action) => {


    switch (action.type) {

        case actionsTypes.FETCH_UserProduct_START: return fetchUserProductStart(state, action);
        case actionsTypes.FETCH_UserProduct_SUCCESS: return fetchUserProductSuccess(state, action);
        case actionsTypes.FETCH_UserProduct_FAIL: return fetchUserProductFailed(state, action);
                
        default:
            return state;
    }
}

export default reducer;