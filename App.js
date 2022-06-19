/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *5
 * @format
 * @flow strict-local
 */

import React,{useState} from 'react';

import {Provider} from 'react-redux';

import {store} from './store/store';

import {NavigationContainer} from '@react-navigation/native';

import Tabs from './components/ui/navigation/navbar/tabs';

import Auth from './containers/Auth/auth';



  let routes = (<Auth/>);


const App = () => {

  const [logged, setLogged] = useState(true);
  
  if(logged){
    routes = (
      <Tabs/>
    )
  }

  return (
      <Provider store={store}>
        <NavigationContainer>
          {routes}
        </NavigationContainer>
        </Provider>  
  );
};


export default App;
