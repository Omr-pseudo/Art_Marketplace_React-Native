import * as actionTypes from './action-types';

import axios from 'axios';


export const fetchUserProductSuccess = (UserProduct) => {

    return {
        type: actionTypes.FETCH_UserProduct_SUCCESS,
        UserProduct: UserProduct
    }
}


export const fetchUserProductFail = (error) => {

    return {
        type: actionTypes.FETCH_Products_FAILED,
        error: error
    }
}

export const fetchUserProductStart = () => {

    return {
        type: actionTypes.FETCH_UserProduct_START
    }
} 


export const fetchUserProduct = (token, userId) => {

    return dispatch => {
        fetchUserProductStart();
        const queryParam =  '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
        axios.get("https://burger--builder-1cc60-default-rtdb.firebaseio.com/UserProduct.json" + queryParam)
                            .then(response => {

                                const fetchedUserProduct = [];

                                for( let key in response.data ){

                                    fetchedUserProduct.push({
                                        ...response.data[key],
                                        id: key
                                    })
                                }
                                dispatch(fetchUserProductSuccess(fetchedUserProduct));
                            })
                            .catch(error => { dispatch( fetchUserProductFail(error))})
    }
}


export const setProducts = (Products) => {
    return {
        type: actionTypes.SET_PRODUCTS,
        Products: Products
    }
}

export const fetchProductsFailed = () => {
    return {
        type: actionTypes.FETCH_Products_FAILED
    }
}

export const initProducts = () => {
    
return dispatch  => {
   
     axios.get("https://art-marketplace-72dee-default-rtdb.firebaseio.com/:pieces.json")
        .then(response => {

            const fetchedUserProduct = [];

            for( let key in response.data ){

             fetchedUserProduct.push({
                ...response.data[key],
                id: key
                })
            }    

            
            dispatch(setProducts(fetchedUserProduct));
        })
        .catch(error => {
            dispatch(fetchProductsFailed());
        })

    }
}