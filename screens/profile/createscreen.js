import React,{useState} from 'react';

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


const CreateScreen = ({navigation}) => {

    const authData = useSelector((state)=>{
        return{
            token:state.auth.token
        }
    })

    const [image, setImage] = useState("");


    const openGallery = async ()=>{

        const result = await launchImageLibrary(options);
        setImage(result.assets[0].uri);

        console.log(result.assets[0].fileName);
    }

    const onSubmitHandler = async () => {

        if(image){

            const uri = image;
            console.log(uri);
            let name = authData.token+uri.substring(uri.lastIndexOf("/")+1);

            console.log(name);

            const imageRef = ref(storage, `images/${name}`);

            uploadBytes(imageRef,uri).then(()=>{
                console.log("uploaded");
            }).catch((e)=> {
                console.log(e)
            });
        }

    }

    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <LinearGradient colors={["#de86ff","#66018a"]}  style={styles.container}>
                
              <CreateForm onPress={openGallery} image={image} onPressSubmit={onSubmitHandler}/>

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
