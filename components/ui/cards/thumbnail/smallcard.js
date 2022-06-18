import React from "react";

import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const Card = (props) => {

    return(

        <View style={styles.container}>
        <TouchableOpacity onPress={props.onPress}>
            
            <Image style={styles.image} resizeMode="contain" source={require('../../../../assets/logo/art.png')}/>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.price} >{props.price}</Text>

            </TouchableOpacity>                
        </View>
    )
}
            
const styles = StyleSheet.create({

    container:{
            backgroundColor:"#ffffff",
            marginHorizontal:24,
            marginVertical:26,
            padding:18,
            width:180,
            height:250,
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
    title:{
        fontSize:35,
        fontFamily:"SpaceMono-Regular",
        color:"#6b0191"
    },
    image:{
        height:120,
        width:120,
        alignSelf:"center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        
    },
    price:{

        marginTop:12,
        fontFamily:"HeartlandSans",
        fontSize:18,
        color:"#6b0191"

    }
})

export default Card;