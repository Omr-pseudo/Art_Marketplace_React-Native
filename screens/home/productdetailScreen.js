import React from 'react';

import {StyleSheet} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import BuyCard from '../../components/ui/cards/detailed/buycard';

import {useSelector} from 'react-redux';


const ProductDetailScreen = ({route,navigation}) => {

    const {id}= route?.params || {}; 

    const Data = useSelector((state)=>{
        return{
            prod:state.prods.products            
        }})
    
    let item = ()=>{
            for(let key in Data.prod){

                if(Data.prod[key].id===id){
                    return Data.prod[key];
                }
            }
        
    } 

    return(
        <LinearGradient colors={["#de86ff","#66018a"]} style={styles.container}>
                <BuyCard 
                    title={item().title}
                    
                    detail={item().desc}

                    price={`${item().price} P K R`}
                    />
        </LinearGradient>
    )
}

const styles = StyleSheet.create({

        container:{
            paddingBottom:"36%",
            paddingTop:"5%",
            backgroundColor:"#66018a"
        }
    
    })

export default ProductDetailScreen;
