import React from 'react';

import {StyleSheet} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import UpdateForm from '../../components/forms/updateform';

const UpdateScreen = ({navigation}) => {

    return(
        <LinearGradient colors={["#de86ff","#66018a"]}  style={styles.container}>
                
              <UpdateForm/>

        </LinearGradient>
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
