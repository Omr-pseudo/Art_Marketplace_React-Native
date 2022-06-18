import React from 'react';

import {StyleSheet} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import CreateForm from '../../components/forms/createform';

const CreateScreen = ({navigation}) => {

    return(
        <LinearGradient colors={["#de86ff","#66018a"]}  style={styles.container}>
                
              <CreateForm/>

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

export default CreateScreen;
