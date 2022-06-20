import React from "react";

import { View,Text, StyleSheet,TextInput, Image,TouchableWithoutFeedback,Keyboard} from "react-native";


import RegularButton from '../../components/ui/buttons/regular-button/regularButton';





const ComplainForm = (props) => {



    return(

        
            <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss}>
            <View style={styles.container}>
            <Image  
                
                source={require("../../assets/icons/complain.png")}
                
                resizeMode="contain"

                style={styles.image}
                />                
            <Text style={styles.label}>Subject</Text>
            <TextInput style={styles.input}/>
            <Text style={styles.label}>Message</Text>
            <TextInput style={styles.input} multiline={true}/>
            <View style={styles.buttonContainer}>
            <RegularButton title="SEND"/>
            </View>
            </View>
            </TouchableWithoutFeedback>
        
    )
}
            
const styles = StyleSheet.create({

    container:{
            backgroundColor:"#ffffff",
            marginHorizontal:12,
            marginVertical:10,
            padding:14,
            width:"65%",
            height:"73%",
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
    image:{
        width:240,
        height:140,
        justifyContent:"center",
        alignItems:"center"
    },
    buttonContainer:{
        width:"80%",
        alignSelf:"center",
        paddingTop:26
    },
    label:{
        marginTop:2,
        fontFamily:"SpaceMono-Bold",
        fontSize:16,
        color:"#66018a"
    },
    input:{
        marginTop:2,
        backgroundColor:"#D9D8D8",
        borderRadius:8,
        fontFamily:"HeartlandSans"
    }
})

export default ComplainForm;