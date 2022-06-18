import React from 'react';

import {View, Image} from 'react-native';

const SearchIcon = () => {

    
    return(
        <View>
            <Image
                source={require('../../../../assets/icons/search.png')}
                resizeMode="contain"
                style={{
                    width:30,
                    height:30,
                    tintColor:'#6b0191'
                }}
            />
        </View>

    )
}



export default SearchIcon
;