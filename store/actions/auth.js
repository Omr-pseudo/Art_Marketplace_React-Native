import * as actionTypes from "./action-types";

import axios from "axios";




export const authStart = () => {

    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, userId) => {

    return {
        type: actionTypes.AUTH_SUCCESS,
        tokenId:token,
        userId:userId
    };
};

export const authFail = (error) => {

    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};


export const logout = () => {

    return {
        type: actionTypes.AUTH_LOGOUT
    }
} 

export const removeError = () => {

    return {
        type: actionTypes.ON_REMOVE_ERROR
    }
} 

export const checkAuthTimeout = (time) => {

    return dispatch => {

        setTimeout(()=> {
            dispatch(logout())

        }, time * 1000);
    }
}


export const auth = (email, password, isSignup) => {

    return dispatch => {

        dispatch(authStart());

        const authData = {

            email: email,
            password: password,
            returnSecureToken: true
        }

        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDgrT06cJpEP75uY3m_jLqFHdEt5Dfcq1I';
        
        if(!isSignup){
             url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDgrT06cJpEP75uY3m_jLqFHdEt5Dfcq1I'
        }


        axios.post(url, authData)
        .then(response => {
         
            const expirationDate = new Date( new Date().getTime() + response.data.expiresIn * 1000);

            dispatch(authSuccess(response.data.idToken, response.data.localId));
            dispatch(checkAuthTimeout(response.data.expiresIn))
        })

        .catch( err => dispatch(authFail(err)))
    };
};

export const onAuthRedirectPath = (path) => {

    return{

        type: actionTypes.AUTH_REDIRECT_PATH,
        path: path
    }
}



export const authStateCheck = () => {

    return dispatch => {


        const token = localStorage.getItem('token');

        if(!token){

            dispatch(logout());
        }

        else{
            const expirationDate = new Date(localStorage.getItem('expirationDate'));

            if(expirationDate > new Date()){

                const userId = localStorage.getItem('userId');

                dispatch(authSuccess(token, userId));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
            }

        }

    }
}