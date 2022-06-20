/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *5
 * @format
 * @flow strict-local
 */

import React from 'react';

import {Provider, useSelector} from 'react-redux';

import {store} from './store/store';

import {NavigationContainer} from '@react-navigation/native';

import Tabs from './components/ui/navigation/navbar/tabs';

import Auth from './containers/Auth/auth';






const App = () => {

  const authData = useSelector((state)=>{
    return {
      isAuth:state.auth.token !=null
    }
  });

  let routes = (<Auth/>);

  
  if(!authData.isAuth){
  
    routes = (
      <Tabs/>
    )
  }

  return (
        <NavigationContainer>
          {routes}
        </NavigationContainer>
        
  );
};

const AppWrapper = () => {

  return (
    <Provider store={store}> 
      <App /> 
    </Provider>
  )
}


export default AppWrapper;
