import React, {useState} from 'react';

import { LogBox } from 'react-native';

import {StyleSheet,Keyboard,TouchableWithoutFeedback} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import SignupForm from '../../components/forms/signupform';




import {useDispatch, useSelector} from "react-redux";

import {auth} from '../../store/actions/index';


LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);


const SignupScreen = ({route,navigation}) => {

    const {err }= route?.params || {}; 




    const error = useSelector((state) => {
        return {
            error: state.auth.error
        }
    })


    
    const dispatch = useDispatch();





    const [email,setEmail] = useState("");
    
    const [password,setPassword] = useState("");
    
    const onSignupHandler = () => {

        if((email && password) && !error.error){

             dispatch(auth(email,password,true));
        }
        else{
            navigation.push('SignupScreen',{ err:true});
        }
    }


    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <LinearGradient colors={["#de86ff","#66018a"]}  style={styles.container}>
                
              <SignupForm onPress={onSignupHandler} error={JSON.stringify(err)} emailHandler={(value)=>setEmail(value)}  passwordHandler={(value)=>setPassword(value)} />

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

export default SignupScreen;
