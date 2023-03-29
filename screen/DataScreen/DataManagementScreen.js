import { Card } from "react-native-paper";
import AppBarComponent from "../../component/AppBarComponent";
import GlobalStyle from "../../style/GlobalStyle";
import { BackHandler, Image, View,Text } from "react-native";
import customerIcon from '../../assets/icons/customer.png';
import shopBag from "../../assets/icons/shopping-bag.png"
import FooterComponent from "../../component/FooterComponent";
export default function DataManagementScreen({history}){
return (
    <>
    <AppBarComponent title="Data Management" />
    <View style={{display:'flex',justifyContent:'center',height:'60%',flex:1,}}>
<View style={{ flexDirection: 'row' }}>
        <Card style={GlobalStyle.card} onPress={()=>history.push('/customer')}>
        <Image source={customerIcon} style={GlobalStyle.icon} />
          <Text style={GlobalStyle.iconText}>
            Customer 
          </Text>
        </Card>
        <Card style={GlobalStyle.card} onPress={()=>history.push('/supplier')}>
          <Image source={shopBag} style={GlobalStyle.icon} />
          <Text style={GlobalStyle.iconText}>
             Supplier
          </Text>
        </Card>
      </View>
</View>
<FooterComponent />
    </>
)
}