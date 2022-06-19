import React from 'react';

import {StyleSheet,View,Text,Image, TouchableOpacity} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {logout} from '../../../../store/actions/index';
 
import {useDispatch} from "react-redux";



import Header from '../../header/header';

import Home from '../../../../containers/Home/home';

import Cart from "../../../../containers/Cart/cart";

import Profile from '../../../../containers/Profilling/userProfile';




const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => (

    <TouchableOpacity
        style={{
            top:-30,
            justifyContent:"center",
            alignContent:"center",
            ...styles.shadows
        }}
    >
        <View style={{
            width:100,
            height:100,
            borderRadius: 65,
            borderWidth:8,
            borderColor:"#fff",
            backgroundColor: '#6b0191',
            elevation:5
        }}>
            {children}
        </View>
    </TouchableOpacity>
)

const Tabs = () => {   
    
    const dispatch = useDispatch();
    
    
    const logoutHandler = () => {
        dispatch(logout());
        console.log("HEllo");
    };


    

    return (
        <Tab.Navigator 
            screenOptions={{
                tabBarShowLabel:false,
                tabBarStyle:{
                    position:"absolute",
                    elevation:0,
                    backgroundColor:'#ffffff',
                    borderTopLeftRadius:60,
                    borderTopRightRadius:60,
                    height:90,
                    ...styles.shadows
                }
            }}
            
            >
            <Tab.Screen name='Home' component={Home}
            
            options={{
                header: () => <Header onPress={logoutHandler}/>,
                tabBarIcon:({focused}) => (
                <View style={{alignItems:"center", justifyContent:"center"}}>
                <Image
                source={require('../../../../assets/icons/home.png')}
                resizeMode="contain"
                style={{
                    width:100,
                    height:100,
                    tintColor:focused? '#6b0191': '#748c94' 
                }}
                />

            </View>)

            }}/>

            <Tab.Screen name='Cart' component={Cart}

                options={{
                    header: () => <Header onPress={logoutHandler}/>,
                    tabBarIcon: ({focused}) => (
                        <Image source={require('../../../../assets/icons/cart.png')}
                        
                        resizeMode="contain"

                        style={{
                            width:100,
                            height:100,
                            tintColor:"#fff"
                        }}
                        />
                    ),
                    tabBarButton: (props) => (
                        <CustomTabBarButton {...props} />
                    )
                }}
            />
            
            <Tab.Screen name='Profile' component={Profile}
            
            options={{
                header: () => <Header onPress={logoutHandler}/> ,
                tabBarIcon:({focused}) => (
                <View style={{alignItems:"center", justifyContent:"center"}}>
                <Image
                source={require('../../../../assets/icons/profile.png')}
                resizeMode="contain"
                style={{
                    width:80,
                    height:80,
                    tintColor:focused? '#6b0191': '#748c94' 
                }}
                />
            </View>)

            }}
            
            />
        
        </Tab.Navigator>
    )

}

const styles = StyleSheet.create({

    shadows:{
        shadowColor:"#7F5DF0",
        shadowOffset:{
            width:0,
            height:10
        },
        shadowOpacity:0.25,
        shadowRadius:3.5,
        elevation:5
    }
});

export default Tabs;