import React from "react";
import { Text, Image, BackHandler,View } from "react-native";
import { Button } from 'react-native-paper'
import logo from "../assets/logo.png";
import FooterComponent from "../component/FooterComponent";
import GlobalStyle from "../style/GlobalStyle";
import HomeStyle from "../style/HomeStyle";
import theme from "../theme/theme";
export default function HomeScreen({ history }) {
    BackHandler.addEventListener('hardwareBackPress', function () {
        BackHandler.exitApp();
        return true;
    });
    const primaryColor = theme.colors.primary;
    return (
        <View style={GlobalStyle.container}>
            <Image source={logo} style={GlobalStyle.logo}></Image>
            <Text style={HomeStyle.welcomeText}>မင်္ဂလာပါ🙏 {'\n'} NK Gold Shop ဆော့ဖ်ဝဲလ်မှ ကြိုဆိုပါသည်။ ဆော့ဖ်ဝဲလ်အသုံးပြုရန်
                လော့ဂ်အင်ဝင်ပါ။</Text>
            <Button icon="login" style={GlobalStyle.loginBtn} mode="contained-tonal" buttonColor={theme.colors.primary} labelStyle={{ color: '#fff' }} onPress={() => history.push("/login")}>
                Login
            </Button>
                <FooterComponent />            
        </View>
    )
}