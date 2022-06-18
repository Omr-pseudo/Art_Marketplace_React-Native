import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';


import ProfileScreen from '../../screens/profile/profilescreen';

import UserDetailScreen from '../../screens/profile/userdetailscreen';

import CreateScreen from '../../screens/profile/createscreen';

import UpdateScreen from '../../screens/profile/updatescreen';

import ComplainScreen from '../../screens/complain/complainscreen';


const Profile = ({navigation}) => {

    const Stack = createNativeStackNavigator();


    return (
        <Stack.Navigator>
            <Stack.Screen name='ProfileScreen' component={ProfileScreen} options={{headerShown:false, headerTintColor:"#fff",headerStyle:{backgroundColor:"#de86ff"}}}/>
            <Stack.Screen name="UserDetailScreen" component={UserDetailScreen} options={{headerTitle:"Details", headerTintColor:"#fff",headerStyle:{backgroundColor:"#de86ff"}}}/>
            <Stack.Screen name="CreateScreen" component={CreateScreen} options={{headerTitle:"Create", headerTintColor:"#fff",headerStyle:{backgroundColor:"#de86ff"}}}/>
            <Stack.Screen name="UpdateScreen" component={UpdateScreen} options={{headerTitle:"Update", headerTintColor:"#fff",headerStyle:{backgroundColor:"#de86ff"}}}/>
            <Stack.Screen name="ComplainScreen" component={ComplainScreen} options={{headerTitle:"Complain", headerTintColor:"#fff",headerStyle:{backgroundColor:"#de86ff"}}}/>
        </Stack.Navigator>

    )
}

export default Profile;
