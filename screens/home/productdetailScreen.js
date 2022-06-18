import React from 'react';

import {StyleSheet} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import BuyCard from '../../components/ui/cards/detailed/buycard';

const ProductDetailScreen = ({navigation}) => {

    return(
        <LinearGradient colors={["#de86ff","#66018a"]} style={styles.container}>
                <BuyCard 
                    title="Loremss ipsum"
                    
                    detail="Lorem ipsum dolor sit amet, consectetur  elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

                    price="12000 P K R"
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
