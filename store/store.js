import thunk from 'redux-thunk';

import {createStore,combineReducers,applyMiddleware} from 'redux';


import authReducer from './reducers/auth';

import prodReducer from './reducers/products';



const rootReducer = combineReducers({
    auth:authReducer,
    prods:prodReducer

});

export const store = createStore(rootReducer,applyMiddleware(thunk));

