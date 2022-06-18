import React, {useState} from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
  

import UnAuthScreen from '../../screens/auth/unauthscreen';

import LoginScreen from "../../screens/auth/loginscreen";

import SignupScreen from '../../screens/auth/signupscreen';

    
    const Auth = () => {
    
        const Stack = createNativeStackNavigator();
        
    
        return(
                <Stack.Navigator>
                    <Stack.Screen name='UnAuth' component={UnAuthScreen} options={{headerShown:false}} />
                    <Stack.Screen name='LoginScreen' component={LoginScreen} options={{headerTitle:"Login", headerTintColor:"#fff",headerStyle:{backgroundColor:"#de86ff"}}} />
                    <Stack.Screen name='SignupScreen' component={SignupScreen} options={{headerTitle:"Signup", headerTintColor:"#fff",headerStyle:{backgroundColor:"#de86ff"}}} />
                </Stack.Navigator>
            
    
        )
    }
    
export default Auth;
