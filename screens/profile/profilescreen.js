import React,{useState,useEffect} from 'react';

import {StyleSheet, View,Image,FlatList} from 'react-native';

import {Text, IconButton} from 'react-native-paper'; 

import {useSelector} from 'react-redux';

import LinearGradient from 'react-native-linear-gradient';

import MainButton from '../../components/ui/buttons/main-button/mainbutton';

import Card from '../../components/ui/cards/thumbnail/smallcard';

import axios from 'axios';


const ProfileScreen = ({navigation}) => {

  const Data = useSelector((state)=>{
    return{
        prods:state.prods.products,
        id:state.auth.userId
    }
});


    const [touch,setTouch] = useState(false);

    const userProds = [];

    
    useEffect(()=>{

      console.log(Data.prods);
      for(let key in Data.prods){
        

          if(Data.prods[key].userId===Data.id){
              userProds.push(Data.prods[key]);
          }
      }
    },[]);


    return(
        <LinearGradient colors={["#de86ff","#66018a"]}  style={styles.container}>
                <View style={styles.header}>  
                    <Image style={touch?styles.smalllDp:styles.dp} resizeMode="contain" source={require("../../assets/images/ph.png")} /> 
                    <Text style={touch?styles.smallUsername:styles.username}>Unnamed</Text>
                    <Text style={touch?styles.smallDated:styles.dated}>Joined 2022</Text>
                    <View style={styles.row}>
                    <IconButton 
          
                                onPress={()=>navigation.navigate("ComplainScreen")}

                                icon={()=><Image 
                                  source={require('../../assets/icons/reportw.png')}
                                  resizeMode="contain"
                                  style={{width:40,height:40}}
                                  />}
                                
                                  style={styles.report}
                                />
                    </View>           

                 </View>
             
                 <View style={styles.body}> 
     
                   <MainButton title="CREATE" color="#de86ff"

                    onPress={() => navigation.navigate("CreateScreen")}
                   
                   />
                 
                 
                   <Text style={styles.collect}>Your Collection</Text> 
                 </View>

                
                 <View styles={styles.cards}>

                 <FlatList
                
                onScrollBeginDrag={()=>{
                  setTouch(true)
                 }}

                 onTouchEnd={()=>{
                  setTouch(false)
                 }}                  

                data={userProds}

                renderItem={({item,index})=>(

                    <Card title={item.title} price={`${item.price} P K R `} onPress={()=>navigation.navigate('ProductDetailScreen',{

                        id:item.id
                    })} />
                    )}
                
                />

                   
                </View>

       
                <View style={{width:"100%", height:"12%"}}>
                </View>
       
        </LinearGradient>
    )
}

const styles = StyleSheet.create({

    container: {
        flex:1,
        backgroundColor:"#AA1ABD",
        justifyContent:"space-between",
        alignItems:"center"
    },
    header: {
        flexDirection:"column",
        alignItems:"center"
      },

      dp:{
        marginTop:"12%",
        width:100,
        height:100,
        borderWidth:8,
        borderRadius:64,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
           
      },
      username:{
        paddingTop:"4%",
        fontFamily:"SpaceMono",
        fontWeight:"bold",
        fontSize:28
      },
      dated:{
        paddingTop:"2%",
        fontFamily:"SpaceMono",
        fontWeight:"normal",
        fontSize:20,
        color:"#de86ff"
      },
      smalllDp:{
        marginTop:"2%",
        width:40,
        height:40,
        borderWidth:8,
        borderRadius:64,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
           
      },
      smallUsername:{
        paddingTop:"1%",
        fontFamily:"SpaceMono",
        fontWeight:"bold",
        fontSize:16
      },
      smallDated:{
        paddingTop:"1%",
        fontFamily:"SpaceMono",
        fontWeight:"normal",
        fontSize:12,
        color:"#de86ff"
      },
      body: {
        flexDirection:"column",
        alignItems:"flex-start",
        paddingTop:"2%"
      },
      collect:{
        paddingTop:"2%",
        fontFamily:"LeagueSpartan",
        fontWeight:"bold",
        fontSize:48
      },
      cards:{
        
        width:"100%",
        height:"100%",
        flexDirection:"column"

      },
      row:{
        flexDirection:"row",
        width:"100%",
        justifyContent:"flex-end",
        marginRight:20
      }
      ,
      report:{
        width:50,
        height:50, 
        backgroundColor:"#66018a",
        elevation:5,
        borderRadius:66
      }

})

export default ProfileScreen;
