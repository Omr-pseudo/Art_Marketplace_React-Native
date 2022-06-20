import React from 'react';

import {StyleSheet,Keyboard,TouchableWithoutFeedback} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import UpdateForm from '../../components/forms/updateform';

const UpdateScreen = ({navigation}) => {

    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <LinearGradient colors={["#de86ff","#66018a"]}  style={styles.container}>
                
              <UpdateForm/>

        </LinearGradient>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({

    container: {
        flex:1,
        backgroundColor:"#AA1ABD",
        justifyContent:"space-between",
        alignItems:"center"
    }
})

export default UpdateScreen;
