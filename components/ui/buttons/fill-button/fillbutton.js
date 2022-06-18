import React from 'react';

import {Button} from 'react-native-paper';



const FillButton = (props) => <Button 

mode="contained" 

onPress={props.onPress} 

color={props.color}

disabled={props.disabled}


style={{

    borderRadius:6,
    elevation:5,
    paddingHorizontal:16,
    paddingVertical:2
}}

labelStyle={{
    
    fontFamily:"HeartlandSans",
    fontSize:12,
    letterSpacing:4,
    color:"#ffffff"
}}

>{props.title}

</Button>

export default FillButton;