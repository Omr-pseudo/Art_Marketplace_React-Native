import React from "react";

import { View,Text, StyleSheet,TextInput, Image,TouchableWithoutFeedback,Keyboard} from "react-native";


import RegularButton from '../../components/ui/buttons/regular-button/regularButton';


const SignupForm = (props) => {

   
    return(

        
            <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss}>
            <View style={styles.container}>
            <Image style={styles.image} resizeMode="contain" source={require("../../assets/icons/sign.png")} />
            <Text style={styles.message}>{props.error?"Something went wrong. Please try again, maybe with new email or password.":null}</Text>
            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.input} textContentType="emailAddress"  onChangeText={props.emailHandler} />
            <Text style={styles.label}>Password</Text>
            <TextInput style={styles.input} secureTextEntry={true} textContentType="password" onChangeText={props.passwordHandler} />
            <View style={styles.buttonContainer}>
            <RegularButton title="SIGNUP" onPress={props.onPress}/>
            </View>
            </View>
            </TouchableWithoutFeedback>
        
    )
}
            
const styles = StyleSheet.create({

    container:{
        backgroundColor:"#ffffff",
        marginHorizontal:12,
        marginVertical:32,
        paddingVertical:8,
        paddingHorizontal:18,
        width:"70%",
        height:"86%",
        borderRadius:24,
        shadowColor: "#000",
        shadowOffset: {
                width: 0,
                height: 8,
                },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,
        elevation: 20,
},
buttonContainer:{
    width:"80%",
    alignSelf:"center",
    paddingTop:24
},
image:{
    
    height:240,
    width:240,
    justifyContent:"center",
    alignSelf:"center"
},
message:{
    marginTop:1,
    fontFamily:"SpaceMono-Bold",
    fontSize:10,
    color:"#de86ff",
    textAlign:"center"
}
,
label:{
    marginTop:6,
    fontFamily:"SpaceMono-Bold",
    fontSize:16,
    color:"#66018a"
},
input:{
    marginTop:4,
    backgroundColor:"#D9D8D8",
    borderRadius:8,
    fontFamily:"HeartlandSans"
}
})

export default SignupForm;