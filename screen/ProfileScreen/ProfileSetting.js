import { Card, Surface } from "react-native-paper";
import AppBarComponent from "../../component/AppBarComponent";
import GlobalStyle from "../../style/GlobalStyle";
import { BackHandler, Image, View,Text } from "react-native";
import lock from "../../assets/icons/lock.png"
import edit from "../../assets/icons/changePassword.png";
import logo from "../../assets/logo.png"
import CustomerStyle from "../../style/CustomerStyle";
import MainStyle from "../../style/MainStyle";
import theme from "../../theme/theme";
import FooterComponent from "../../component/FooterComponent";
import lanuageIcon from "../../assets/icons/language.png";
export default function ProfileSetting({history}){
return (
    <>
    <AppBarComponent title="Profile Setting" />
  <Surface style={CustomerStyle.profileSurface}>
  <Image source={logo}  style={{  width:90,
        height:90, marginTop:20  }}/>
        <Text style={{   display:'flex',
        alignItems:'flex-start',     
        justifyContent: 'flex-start',
        marginTop:15,
        color:'#b79649',
        fontWeight:'bold',
        fontSize: 20,
        marginLeft:20,}}>Ko Aung Gold Shop</Text>
          <Text style={CustomerStyle.info} >09-969119949</Text>
          
          <View style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:10,flex:1,flexDirection:'column',flexGrow:1,width:'100%',}}>
        <Surface elevation={4} style={[CustomerStyle.surfaceList,{marginBottom:10}]} onTouchStart={()=>history.push("/profile/edit")}>
          <Image source={edit} style={GlobalStyle.profileIcon}/>      
          <Text style={CustomerStyle.info}>Edit</Text>
         
        </Surface>
        <Surface elevation={4} style={[CustomerStyle.surfaceList,{marginBottom:10}]} onTouchStart={()=>history.push("/profile/changePassword")}>
          <Image source={lock} style={GlobalStyle.profileIcon}/>      
          <Text style={CustomerStyle.info}>Change Password</Text>
         
        </Surface>
        <Surface elevation={4} style={[CustomerStyle.surfaceList,{marginBottom:10}]} onTouchStart={()=>history.push("/profile/changeLanguage")}>
          <Image source={lanuageIcon} style={GlobalStyle.profileIcon}/>      
          <Text style={CustomerStyle.info}>Change Language</Text>
         
        </Surface>
      </View>
          
  </Surface>
  <FooterComponent/>
    </>
)
}