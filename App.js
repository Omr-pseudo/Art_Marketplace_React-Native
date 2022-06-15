/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *5
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import Tabs from './components/ui/navigation/navbar/tabs';

const App = () => {
  
  return (
        <NavigationContainer>
          <Tabs/>
        </NavigationContainer>
  );
};


export default App;
