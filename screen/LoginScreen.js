import { useState } from "react";
import { Image, BackHandler, View } from "react-native";
import { Button, TextInput, Avatar, Card, Title, Paragraph, Text } from 'react-native-paper'
import FooterComponent from "../component/FooterComponent";
import logo from "../assets/logo.png";
import theme from '../theme/theme';
import GlobalStyle from "../style/GlobalStyle";
import API_Endpoint from "../api/URL";
import User_Login from "../api/Account/LoginController";
export default function LoginScreen({ history }) {
    BackHandler.addEventListener('hardwareBackPress', function () {
        history.push('/');
        return true;
    });
    //hook
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [warningText,setWarningText]=useState("");
    const [disabledLoginBtn,setDisabledLoginBtn]=useState(true);
    const postBody={
            Phone_Number:phoneNumber,
            Password:password,
            Business_Name:API_Endpoint.Business_Name
        
    }
    const userLogin=async()=>{
    
    await  User_Login(postBody,setWarningText,history);
        history.push('/main');
    }
    return (
        <View style={GlobalStyle.container}>
            <Image source={logo} style={GlobalStyle.logo} />
            <TextInput
                label="Phone Number"
                keyboardType="number-pad"
                style={GlobalStyle.textInput}
                mode="outlined"
                theme={{ colors: { primary: theme.colors.secondary } }}
                onChangeText={value => [setPhoneNumber(value),value==="" || password===""?setDisabledLoginBtn(true):setDisabledLoginBtn(false)]}
            />
            <TextInput
                label="Password"
                keyboardType="default"
                style={GlobalStyle.textInput}
                mode="outlined"
                theme={{ colors: { primary: theme.colors.secondary } }}
                onChangeText={value => [setPassword(value),value==="" || phoneNumber===""?setDisabledLoginBtn(true):setDisabledLoginBtn(false)]}
                placeholderTextColor={theme.colors.primary}
                selectionColor={theme.colors.primary}
            />
            <Button icon="login" style={GlobalStyle.loginBtn} mode="contained-tonal" buttonColor={theme.colors.primary} labelStyle={{ color: '#fff' }} onPress={()=>userLogin()} disabled={disabledLoginBtn}>
                Login
            </Button>
          {
              warningText &&
              <Text style={{marginTop:'5%',color:'red'}}>{warningText}</Text>
          }
            <FooterComponent />
        </View>
    )
}   