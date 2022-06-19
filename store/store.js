import thunk from 'redux-thunk';

import {createStore,combineReducers,applyMiddleware} from 'redux';


import authReducer from './reducers/auth';



const rootReducer = combineReducers({
    auth:authReducer

});

export const store = createStore(rootReducer,applyMiddleware(thunk));

