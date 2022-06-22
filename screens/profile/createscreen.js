import React,{useState} from 'react';

import axios from 'axios';

import {StyleSheet,Keyboard,TouchableWithoutFeedback} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import {useSelector} from "react-redux";

import CreateForm from '../../components/forms/createform';

import {launchImageLibrary} from 'react-native-image-picker';

import {storage} from '../../firebase';

import {ref,uploadBytes} from 'firebase/storage';


const options = {
    title: 'Select Image',
    type: 'library',
    options: {
      maxHeight: 200,
      maxWidth: 200,
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false
    }
}


const CreateScreen = ({route, navigation}) => {

    const {err }= route?.params || {};


    const authData = useSelector((state)=>{
        return{
            id:state.auth.userId
        }
    })



    const [image, setImage] = useState("");

    const [title, setTitle] = useState("");
    
    const [desc, setDesc] = useState("");

    const [price, setPrice] = useState("");



    const openGallery = async ()=>{

        const result = await launchImageLibrary(options);
        setImage(result.assets[0].uri);

        console.log(result.assets[0].fileName);
    }

    const onSubmitHandler = async () => {

        if(!(image)||!(title)||!(desc)||!(price)){

           return  navigation.navigate("CreateScreen",{err:"left empty"});
        }

            const piecesData = {
                title:title,
                desc:desc,
                price:Number(price),
                userId:authData.id
            }

            const uri = image;
            console.log(uri);
            let name = authData.id+uri.substring(uri.lastIndexOf("-")+1);

            console.log(name);

            const imageRef = ref(storage, `images/${name}`);

            uploadBytes(imageRef,uri).then(()=>{

                
                
                axios.post("https://art-marketplace-72dee-default-rtdb.firebaseio.com/:pieces.json",piecesData)
                
                .then(response => {
                    console.log(response, "uploaded");
                    navigation.goBack();

                }).catch((e)=>{
                    console.log(authData.id);
                    console.log(e);
                })
                
                
            }).catch((e)=> {
                console.log(e)
            });
        

    }

    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <LinearGradient colors={["#de86ff","#66018a"]}  style={styles.container}>
                
              <CreateForm onPress={openGallery} 
                        image={image} 
                        onPressSubmit={onSubmitHandler}
                        
                        titleChanged={(val) => setTitle(val)}

                        descChanged={(val) => setDesc(val)}

                        priceChanged={(val) => setPrice(val)}
                        
                        error={JSON.stringify(err)}
                        />

        </LinearGradient>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({

    container: {
        flex:1,
        backgroundColor:"#AA1ABD",
        justifyContent:"space-between",
        alignItems:"center"
    }
})

export default CreateScreen;
