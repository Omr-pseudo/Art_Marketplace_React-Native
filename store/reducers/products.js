import * as actionsTypes from '../actions/action-types';
import { updateObject } from '../utility';



const initialState = {
    products: [],
    userproducts: [],
    productsError:false
};


const fetchSetProducts = (state, action) => {
    
    return updateObject(state, {products: action.Products});
}

const fetchUserProductSuccess = (state, action) => {
    
    return updateObject( state, {loading: false, UserProduct: action.UserProduct});
}

const fetchProductFailed = (state, action) => {
    return updateObject(state, {productsError: true})
}



const reducer = (state = initialState, action) => {


    switch (action.type) {

        case actionsTypes.SET_PRODUCTS: return fetchSetProducts(state, action);
        case actionsTypes.FETCH_Products_FAIL: return fetchProductFailed(state, action);
                
        default:
            return state;
    }
}

export default reducer;