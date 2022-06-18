import React from "react";

import { View,Text, StyleSheet,TextInput, TouchableOpacity, TouchableWithoutFeedback} from "react-native";

import {launchImageLibrary} from'react-native-image-picker';

import RegularButton from '../../components/ui/buttons/regular-button/regularButton';





const options = {
    title: 'Select Image',
    type: 'library',
    options: {
      maxHeight: 200,
      maxWidth: 200,
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false
    }
}



const CreateForm = (props) => {



    const openGallery = async ()=>{

        const image = await launchImageLibrary(options);
        console.log(image);
    }

    return(
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss}>
        <View style={styles.container}>
            <Text style={styles.label}>Upload</Text>
            <View style={styles.fileSelector} >
                <TouchableOpacity onPress={openGallery}>
                <Text style={styles.selectorText}>BROWSE</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.label}>Title</Text>
            <TextInput style={styles.input}/>
            <Text style={styles.label}>Description</Text>
            <TextInput style={styles.input}/>
            <Text style={styles.label}>Price</Text>
            <TextInput style={styles.input}/>
            <View style={styles.buttonContainer}>
            <RegularButton title="LIST"/>
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
    fileSelector:{

        marginTop:6,
        width:230,
        height:50,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#D9D8D8",
        borderRadius:8
    },
    buttonContainer:{
        width:"50%",
        alignSelf:"flex-end",
        paddingTop:12
    },
    label:{
        marginTop:2,
        fontFamily:"SpaceMono-Bold",
        fontSize:16,
        color:"#66018a"
    },
    selectorText:{
        fontFamily:"HeartlandSans",
        color:"#66018a",
        letterSpacing:4,
        textDecorationLine:"underline",
        textDecorationColor:"#66018a"    
    },
    input:{
        marginTop:2,
        backgroundColor:"#D9D8D8",
        borderRadius:8,
        fontFamily:"HeartlandSans"
    }
})

export default CreateForm;