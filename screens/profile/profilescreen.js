import React,{useState} from 'react';

import {StyleSheet, View,Image, ScrollView} from 'react-native';

import {Text, IconButton} from 'react-native-paper'; 

import LinearGradient from 'react-native-linear-gradient';

import MainButton from '../../components/ui/buttons/main-button/mainbutton';

import Card from '../../components/ui/cards/thumbnail/smallcard';


const ProfileScreen = ({navigation}) => {

    return(
        <LinearGradient colors={["#de86ff","#66018a"]}  style={styles.container}>
                <View style={styles.header}>  
                    <Image style={styles.dp} resizeMode="contain" source={require("../../assets/images/ph.png")} /> 
                    <Text style={styles.username}>Unnamed</Text>
                    <Text style={styles.dated}>Joined 2022</Text>
           
                 </View>
                 <ScrollView>

                 <View style={styles.body}> 

                 <IconButton 
          
                      onPress={()=>navigation.navigate("ComplainScreen")}
          
                      icon={()=><Image 
                        source={require('../../assets/icons/reportw.png')}
                        resizeMode="contain"
                        style={{width:50,height:50}}
                        />}
                      
                        style={styles.report}
                      />

                      
                   <MainButton title="CREATE" color="#de86ff"

                    onPress={() => navigation.navigate("CreateScreen")}
                   
                   />
                 
                 
                   <Text style={styles.collect}>Your Collection</Text> 
                 </View>

                
                 <View styles={styles.cards}>

                   <Card title="new" price="1200 P K R"  onPress={()=>{navigation.navigate("UserDetailScreen")}}/>

                   <Card title="new" price="1200 P K R"  onPress={()=>{navigation.navigate("UserDetailScreen")}}/>

                   

                </View>

                </ScrollView>
       
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
      report:{
        width:60,
        height:60, 
        alignSelf:"flex-end", 
        backgroundColor:"#66018a",
        elevation:5,
        borderRadius:66
      }

})

export default ProfileScreen;
