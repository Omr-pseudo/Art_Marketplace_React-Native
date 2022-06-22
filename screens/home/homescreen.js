import React, {useState,useEffect} from 'react';

import {StyleSheet, View, ScrollView, Image,FlatList} from 'react-native';

import {useSelector,useDispatch} from 'react-redux';

import {Text, IconButton} from 'react-native-paper'; 

import FilterIcon from '../../components/ui/custom/filter-icon/filtericon';

import LinearGradient from 'react-native-linear-gradient';

import Card from '../../components/ui/cards/thumbnail/smallcard';

import {initProducts} from "../../store/actions/index";


const HomeScreen = ({navigation}) => {

    const Data = useSelector((state)=>{
        return{
            prods:state.prods.products,
            id:state.auth.userId
        }
    });

    const dispatch = useDispatch();


    useEffect(()=>{
        dispatch(initProducts());
    },[])


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
            <View style={styles.iconButtonContainer}>
                    <IconButton 
                
                    icon={()=><Image 
                    source={require('../../assets/icons/reportw.png')}
                    resizeMode="contain"
                    style={{width:50,height:50}}
                    />}
                
                    style={styles.report}
                
                    onPress={()=>navigation.navigate("ComplainScreen")}
                
                />
            </View>
            <View style={styles.productsContainer}>
               
                <FlatList
                
                data={Data.prods?Data.prods:[]}

                renderItem={({item,index})=>(

                    <Card title={item.title} price={`${item.price} P K R `} onPress={()=>navigation.navigate('ProductDetailScreen',{

                        id:item.id
                    })} />
                    )}
                
                />
            
           
                
            </View>
            <View style={{height:140}}>

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
                    fontSize:34,
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
        width:30,
        height:30
    },
    report:{
      width:60,
      height:60, 
      alignSelf:"flex-start", 
      backgroundColor:"#66018a",
      elevation:5,
      borderRadius:66,
      alignSelf:"flex-end"
    },
    iconButtonContainer:{
        flex:0.25,
        padding:12,
    },
    productsContainer:{
        flex:1,
        paddingTop:"16%"
    }

    
})

export default HomeScreen;