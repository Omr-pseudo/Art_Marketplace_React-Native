import React from 'react'

import {Button} from 'react-native-paper';



const MainButton = (props) => <Button 

mode="contained" 

onPress={props.onPress} 

color={props.color}

disabled={props.disabled}

style={{

    borderRadius:26,
    paddingHorizontal:12,
    elevation:8
}}

labelStyle={{
    
    fontFamily:"HeartlandSans",
    fontSize:26,
    letterSpacing:8,
    color:"#ffffff"
}}

>{props.title}

</Button>

export default MainButton;