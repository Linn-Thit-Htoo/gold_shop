import { Text } from "react-native-paper";
import { BackHandler,Image,View } from "react-native";
import { Card } from 'react-native-paper'
import MainStyle from "../style/MainStyle";
import GlobalStyle from "../style/GlobalStyle";
import saleIcon from '../assets/icons/sale.png';
import buyIcon from '../assets/icons/buy.png';
import DatabaseIcon from '../assets/icons/database.png';
import debitIcon from '../assets/icons/debit.png';
import dashboardIcon from '../assets/icons/dashboard.png';
import settingIcon from '../assets/icons/setting.png';
import FooterComponent from "../component/FooterComponent";

const MainScreen=({history})=>{
    BackHandler.addEventListener('hardwareBackPress', function () {
      history.push('/');
        return true;
    });    
return(
    <View style={{height:'100%'}}>
    <Text style={MainStyle.businessName}>Ko Aung Gold Shop</Text>
    <Text style={MainStyle.greetingText}>Good Morning 👋</Text>
    <View style={{marginTop:'20%'}}>
    <View style={{display:'flex',flexDirection:'row'}}>
    <Card style={GlobalStyle.card} onPress={()=>history.push("/sale/management")}>
        <Image source={saleIcon} style={GlobalStyle.icon} />
          <Text style={GlobalStyle.iconText}>
            Sale Gold
          </Text>
        </Card>
        <Card style={GlobalStyle.card} onPress={()=>history.push("/buy/management")}>
        <Image source={buyIcon} style={GlobalStyle.icon} />
          <Text style={GlobalStyle.iconText}>
            Buy Gold
          </Text>
        </Card>
      
    </View>
    <View style={{display:'flex',flexDirection:'row'}}>
    <Card style={GlobalStyle.card} onPress={()=>history.push('/data')}>
        <Image source={DatabaseIcon} style={GlobalStyle.icon} />
          <Text style={{marginLeft:10,}}>
          Data
          </Text>
        </Card>
        <Card style={GlobalStyle.card} onPress={()=>history.push('/debit')}>
        <Image source={debitIcon} style={GlobalStyle.icon} />
          <Text style={GlobalStyle.iconText}>
            Debit Money
          </Text>
        </Card>
    </View>
    <View style={{display:'flex',flexDirection:'row'}}>
    <Card style={GlobalStyle.card} onPress={()=>history.push("/dashboard")}>
        <Image source={dashboardIcon} style={GlobalStyle.icon} />
          <Text style={GlobalStyle.iconText}>
            Dashboard
          </Text>
        </Card>
        <Card style={GlobalStyle.card} onPress={()=>history.push("/profile/setting")}>
        <Image source={settingIcon} style={GlobalStyle.icon} />
          <Text style={GlobalStyle.iconText}>
           User Setting
          </Text>
        </Card>
    </View>
    </View>
  <FooterComponent/>

    </View>
)
}
export default MainScreen;