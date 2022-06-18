import React from 'react';

import {StyleSheet} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import ComplainForm from '../../components/forms/complainform';

const ComplainScreen = ({navigation}) => {

    return(
        <LinearGradient colors={["#de86ff","#66018a"]}  style={styles.container}>
                
              <ComplainForm/>

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

export default ComplainScreen;
