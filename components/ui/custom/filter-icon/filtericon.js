import React from 'react';

import {View, Image} from 'react-native';

const FilterIcon = () => {

    
    return(
        <View>
            <Image
                source={require('../../../../assets/icons/filter.png')}
                resizeMode="contain"
                style={{
                    width:20,
                    height:20
                }}
            />
        </View>

    )
}



export default FilterIcon;