import React, {useState} from 'react';

import {Searchbar} from 'react-native-paper';

import {View, Image, StyleSheet} from 'react-native';

import SearchIcon from '../custom/searchbar-icon/searchicon';

const Header = () => {

    const [query, setQuery] = useState('');

    return(
        <View style={styles.head}>
            <Searchbar 
                value={query}
                
                icon= {()=> <SearchIcon/>}

                style={{
                    width:"70%",
                    height:"40%",
                    borderRadius:35,
                    backgroundColor:"#E6E6E6"
                    
                }}
            />

            <Image
                source={require('../../../assets/logo/art.png')}
                resizeMode="contain"
                style={{
                    width:70,
                    height:70,
                    margin:10
                }}
            />
        </View>

    )
}

const styles = StyleSheet.create({

    head: {
        height:100,
        backgroundColor:"#ffffff",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center"
    }
});


export default Header;