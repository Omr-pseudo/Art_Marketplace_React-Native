import React from 'react';

import {StyleSheet} from 'react-native';

import {Text, Surface} from 'react-native-paper'; 

import LinearGradient from 'react-native-linear-gradient';

const Cart = () => {

    return(
        <LinearGradient colors={["#FBD3E9","#BB377D"]}  style={styles.container}>
            <Surface style={styles.surface} elevation={5}>
                <Text style={{fontSize:20}}>Cart</Text>
            </Surface>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({

    container: {
        flex:1,
        backgroundColor:"#AA1ABD",
        justifyContent:"center",
        alignItems:"center"
    },
    surface: {
        padding: 8,
        height: 100,
        width: 300,
        borderRadius:12,
        alignItems: 'center',
        justifyContent: 'center',
      }
})

export default Cart;