import { StyleSheet } from "react-native";
import theme from "../theme/theme";
const GlobalStyle = StyleSheet.create({
    container: {
      display:'flex',
      height:'100%',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    logo: {
        width: 150,
        height: 150        
      },
    icon:{
      width:55,
      height:55,
      alignSelf:'center', //d kg 
    },
    profileIcon:{
      width:40,
      height:40,
      alignSelf:'center', 
    },
      loginBtn : {
        marginTop:'7%',
        width:'80%'
    },
    textInput:{
      height: 50, 
      width: 310,
      marginTop:'5%',      
      backgroundColor:'#fff'
    },
    saleInput:{
      marginTop:'50%',
      backgroundColor:'#fff'
    },
    card:{      
      width:'40%',
      margin:20,
      padding:10,
      borderRadius:20,
      backgroundColor:'#fff',
      alignItems:'center',
      justifyContent:'center',
      elevation:3
    },
    iconText:{
      marginTop:3,
      fontWeight:'bold',
      // marginLeft:10,
    },
    dropdown: {
      // height: 35,
      height: 50, 
      width: 280,
      marginTop:20,
      borderWidth: 0.8,
      borderRadius: 8,
      paddingHorizontal: 8,
    },
    label: {
      position: 'absolute',
      backgroundColor: 'white',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
      color:theme.colors.primary
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
    surface: {
      borderRadius:13,      
      display:'flex',
      justifyContent:'center',
      backgroundColor:'#fff',
      padding: 8,    
      height:'100%',
      width:'100%',
      marginTop:'1%',
      alignItems: 'center',
    
    },
 
    profile_surface:{
      borderRadius:13,      
      display:'flex',
      backgroundColor:'#fff',
      padding: 8,    
      height:'80%',
      width:'90%',
      marginLeft:'5%',
      marginTop:'5%', 
    },  
    textInputIcon:{
      top:5,
    },
    logoIcon:{
      width:90,
      height:90,
      alignSelf:'center',
      top:27,
     
    }

  });
  export default GlobalStyle;