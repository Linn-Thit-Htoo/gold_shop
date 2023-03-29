import { StyleSheet } from "react-native";
import theme from "../theme/theme";
const CustomerStyle=StyleSheet.create({
    card:{      
        width:'40%',
        margin:20,
        padding:10,
        borderRadius:20,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
        elevation:3,
        
      },
      icon:{
        width:55,
        height:55,        
      },
      iconDeleteScreen:{
        marginTop:'10%',
        marginBottom:'10%',
      },
      surface: {
        borderRadius:13,      
        display:'flex',
        backgroundColor:'#fff',
        padding: 8,    
        height:'50%',
        width:'90%',
        marginLeft:'5%',
        marginTop:'25%',
        alignItems: 'center',
      },
      profileSurface:{
        borderRadius:13,      
        display:'flex',
        backgroundColor:'#fff',
        padding: 8,    
        height:'65%',
        width:'90%',
        marginLeft:'5%',
        marginTop:'30%',
        // flexDirection:'column',
        // flexGrow:1,
        justifyContent: 'center',
        alignItems: 'center',
      },  
      editProfileSurface:{
        borderRadius:13,      
        display:'flex',
        backgroundColor:'#fff',
        padding: 8,    
        height:'60%',
        width:'90%',
        marginLeft:'5%',
        marginTop:'20%',
        justifyContent: 'center',
        alignItems: 'center',
      },  
      surfaceList: {
        backgroundColor:'#fff',
        borderRadius:10,
        padding: 8,
        height: 90,
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        // marginLeft:-100,
      },
      info:{
        fontWeight:'bold',
        fontSize:15,
        margin:3
      },
      surface_for_create_sales:{
        borderRadius:13,      
        display:'flex',
        backgroundColor:'#fff',
        padding: 8,    
        height:'auto',        
        marginLeft:'5%',
        marginRight:'5%',
        marginTop:'5%',
        alignItems: 'center',        
      },  
      container: {
        // flex: 1,
        alignItems: 'center',
        marginTop:10,
      },
      saleListView:{
        width:'150%',
        justifyContent:'center',
        alignItems:'center',
        marginTop:40,
        marginRight:100,
        marginLeft:-50, 
      },
      createCustomerScreen:{
        borderRadius:13,      
        display:'flex',
        justifyContent:'center',
        backgroundColor:'#fff',
        padding: 8,    
        height:'97%',
        width:'100%',
        marginTop:'1%',
        alignItems: 'center',
      },
      createSaleScreen:{
        borderRadius:13,      
        display:'flex',
        justifyContent:'center',
        backgroundColor:'#fff',
        padding: 8,    
        height:'90%',
        width:'100%',
        alignItems: 'center',
        marginTop:10
      }
});
export default CustomerStyle;