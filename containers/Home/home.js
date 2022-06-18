import React, {useState} from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';



import HomeScreen from '../../screens/home/homescreen';

import ProductDetailScreen from '../../screens/home/productdetailScreen';

import ComplainScreen from '../../screens/complain/complainscreen';


const Home = () => {

    const Stack = createNativeStackNavigator();
    

    return(
            <Stack.Navigator>
                <Stack.Screen name='HomeScreen' component={HomeScreen} options={{headerShown:false, headerTintColor:"#fff",headerStyle:{backgroundColor:"#de86ff"}}}/>
                <Stack.Screen name='ProductDetailScreen' component={ProductDetailScreen} options={{headerTitle:"Details", headerTintColor:"#fff",headerStyle:{backgroundColor:"#de86ff"}}} /> 
                <Stack.Screen name="ComplainScreen" component={ComplainScreen} options={{headerTitle:"Complain", headerTintColor:"#fff",headerStyle:{backgroundColor:"#de86ff"}}}/>
            </Stack.Navigator>
        

    )
}

export default Home;