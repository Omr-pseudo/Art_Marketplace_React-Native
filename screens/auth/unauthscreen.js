import React from 'react';

import {StyleSheet, View, Image,Text} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';


import FillButton from '../../components/ui/buttons/fill-button/fillbutton';






const UnAuthScreen = ({navigation}) => {


    return(
        <LinearGradient colors={["#de86ff","#66018a"]}  style={styles.container}>
            <Image source={require("../../assets/icons/artist.png")} style={styles.image}/>
            <View style={styles.text}>
                <Text style={styles.heading}>
                Discover, collect, and sell extraordinary ART
                </Text>
                <Text style={styles.subheading}>
                This is the open marketplace where everyone can participate
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <FillButton title="Login" onPress={()=>navigation.navigate("LoginScreen")}/>
                <Text style={styles.subheading}>OR</Text>
                <FillButton title="Signup" onPress={()=>navigation.navigate("SignupScreen")}/>
            </View>



        </LinearGradient>
    )
}

const styles = StyleSheet.create({

    container: {
        flex:1,
        paddingBottom:24,
        justifyContent:"space-evenly",
        alignItems:"center"
    },
    image:{
        width:320,
        height:320,
        alignSelf:"flex-end"
    },
    text:{

        padding:20
    },
    heading:{
        fontFamily:"SpaceMono-Bold",
        fontSize:27,
        color:"#ffffff"
    },
    subheading:{

        fontSize:18,
        color:"#de86ff"
    },
    buttonContainer:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-evenly"
    }
    
})

export default UnAuthScreen;