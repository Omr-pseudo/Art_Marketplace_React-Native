import React, {useState} from 'react';

import {StyleSheet, View, ScrollView, Image} from 'react-native';

import {Text, IconButton} from 'react-native-paper'; 

import FilterIcon from '../../components/ui/custom/filter-icon/filtericon';

import LinearGradient from 'react-native-linear-gradient';

import Card from '../../components/ui/cards/thumbnail/smallcard';

const HomeScreen = ({navigation}) => {

    const [selectedFilter, selectFilter] = useState("Popular");

    const [filter, setFilter] = useState({
        0:"Popular",
        1:"Low",
        2:"High"
    });


    return(
        <LinearGradient colors={["#de86ff","#66018a"]}  style={styles.container}>
            <View style={styles.filterContainer}>
                <Text style={styles.filterText} >{filter[0]}</Text>

                <IconButton icon={() => <FilterIcon/>} style={styles.iconText}/>
            </View>
            <View style={styles.productsContainer}>
                
                
            <IconButton 
           
           icon={()=><Image 
             source={require('../../assets/icons/reportw.png')}
             resizeMode="contain"
             style={{width:50,height:50}}
             />}
           
             style={styles.report}
           
             onPress={()=>navigation.navigate("ComplainScreen")}
           
           />
           
           <Card title="new" price="1200 P K R" onPress={()=>navigation.navigate('ProductDetailScreen')} />     
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({

    container: {
        flex:1,
    },
    filterText:{
        fontFamily:"LeagueSpartan",
                    fontSize:46,
                    fontWeight:"bold"
    },
    filterContainer: {
        margin: 24,
        flexDirection:"row",
        justifyContent:"space-between"
      },
      iconText:{

        backgroundColor:"#ffffff",
        borderRadius:5,
        width:45,
        height:45
    },
    report:{
      width:60,
      height:60, 
      alignSelf:"flex-start", 
      backgroundColor:"#66018a",
      elevation:5,
      borderRadius:66
    }

    
})

export default HomeScreen;