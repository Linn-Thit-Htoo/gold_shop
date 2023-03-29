import React,{ useState,useEffect } from 'react';
import { Image, Text, View, KeyboardAvoidingView,SafeAreaView,ActivityIndicator  } from 'react-native';
import theme from '../../../theme/theme';
import GlobalStyle from '../../../style/GlobalStyle';
import customerIcon from "../../../assets/icons/customer.png"
import AppBarComponent from '../../../component/AppBarComponent';
import DropdownComponent from '../../../component/DropdownComponent';
import { Surface, TextInput,Button,Snackbar, useTheme} from 'react-native-paper';
import FooterComponent from '../../../component/FooterComponent';
import CustomerStyle from '../../../style/CustomerStyle';
import Create_Customer from '../../../api/Customer/CreateCustomerController';
import List_Customer from '../../../api/Customer/ListCustomerController';
import AsyncStorage from "@react-native-async-storage/async-storage";
import API_Endpoint from '../../../api/URL';
import axios from 'axios';
export default function UpdateCustomerScreen({ history }) {
  const [customerID,setCustomerID]=useState();
  const [customerData, setCustomerData] = useState({});
  const [showLoading,setShowLoading]=useState(false);
  const [customerList, setCustomerList] = useState([]);
  const [disabledInputData,setDisabledInputData]=useState(true);
  const [customerName,setCustomerName]=useState("");
  const [phoneNumber,setPhoneNumber]=useState();
  const [shopName,setShopName]=useState("");
  const [shopAddress,setShopAddress]=useState("");
  const [selectedCLV,setSelectedCLV]=useState("");
  const [respMessage,setRespMessage] = useState("");
  const title="Update Customer";

  useEffect(() => {
    console.log(customerList);
    AsyncStorage.getItem('customerID').then(customerID => {
      callAPI(customerID);
      setCustomerID(customerID);
    }).catch((err)=>{alert(err)});
    AsyncStorage.getItem('customerName').then(customerName => {
      setCustomerName(customerName);
    }).catch((err)=>{alert(err)});
    AsyncStorage.getItem('phoneNumber').then(phoneNumber => {
      setPhoneNumber(phoneNumber);
    }).catch((err)=>{alert(err)});
    AsyncStorage.getItem('shopName').then(shopName => {
      setShopName(shopName);
    }).catch((err)=>{alert(err)});
    AsyncStorage.getItem('shopAddress').then(shopAddress => {
      setShopAddress(shopAddress);
    }).catch((err)=>{alert(err)});
    AsyncStorage.getItem('selectedCLV').then(selectedCLV=>{
      setSelectedCLV(selectedCLV);
    }).catch((err)=>{alert(err)});
setDisabledInputData(false);
  }, []);
  const callAPI = (customerID) =>{
    List_Customer('false',customerID,setCustomerList,setShowLoading);
  }
 
  const postBody={
    Customer_ID:customerID,
    Customer_Name:customerName,
  Customer_Phone_Number:phoneNumber,
  Customer_CLV:selectedCLV,
  Customer_Shop_Name:shopName,
  Customer_Shop_Address:shopAddress,   
  Update_By:"NK",
    Business_Name:"NKGoldShop"
}
  return (
    <>
      <AppBarComponent title={title} postBody={postBody} disabledInputData={disabledInputData} />
      <KeyboardAvoidingView behavior='position' style={{width:'100%',height:'100%',padding:24,flex:1,justifyContent:'space-around',
     }}>
            <SafeAreaView>
       <Surface style={CustomerStyle.createCustomerScreen}>
        <View style={{ display: 'flex', flex: 1, alignItems: 'center' }}>                
          <Image source={customerIcon} style={[GlobalStyle.logoIcon, { marginTop: -10,marginBottom:20 }]} />          
                 
       {customerList[0]?  (
  <View>
       <TextInput
            label="Name"
            keyboardType="default"
            mode="outlined"
            value={customerName}
            theme={{ colors: { primary: theme.colors.secondary } }}
            style={GlobalStyle.textInput}
            right={<TextInput.Icon icon="account" style={GlobalStyle.textInputIcon} iconColor={theme.colors.primary}/>}
            onChangeText={value => [setCustomerName(value),value==="" || phoneNumber===undefined || shopName==="" || shopAddress==="" ?setDisabledInputData(true):setDisabledInputData(false)]}
            
          />
          <TextInput
            label="Phone Number"
            keyboardType="number-pad" 
            mode="outlined"
            value={phoneNumber}
            theme={{ colors: { primary: theme.colors.secondary } }}
            style={GlobalStyle.textInput}
            right={<TextInput.Icon icon="phone" style={GlobalStyle.textInputIcon} iconColor={theme.colors.primary} />}
            onChangeText={value => [setPhoneNumber(value),value==="" || customerName==="" || shopName==="" || shopAddress==="" ?setDisabledInputData(true):setDisabledInputData(false)]}

          />

          <TextInput
            label="Shop Name"
            keyboardType="default"
            value={shopName}
            mode="outlined"
            theme={{ colors: { primary: theme.colors.secondary } }}
            style={GlobalStyle.textInput}
            right={<TextInput.Icon icon="store" style={GlobalStyle.textInputIcon} iconColor={theme.colors.primary} />}
            onChangeText={value => [setShopName(value),value==="" || phoneNumber===undefined || customerName==="" || shopAddress==="" ?setDisabledInputData(true):setDisabledInputData(false)]}
          />                    
            <TextInput
              label="Address"
              keyboardType="default"
              mode="outlined"
              value={shopAddress}
              theme={{ colors: { primary: theme.colors.secondary } }}
              style={GlobalStyle.textInput}
              right={<TextInput.Icon icon="map-marker" style={GlobalStyle.textInputIcon} iconColor={theme.colors.primary} />}
              onChangeText={value => [setShopAddress(value),value==="" || phoneNumber===undefined || shopName==="" || customerName==="" ?setDisabledInputData(true):setDisabledInputData(false)]}
            />
  </View>         
        ) : (
        <ActivityIndicator size="large" color={theme.colors.primary} showLoading style={{ display:'flex', flex: 1,
        justifyContent: 'center',
    alignContent:'center',alignItems:'center',alignSelf:'center',flexGrow:1,
        }}/>       )
       }
          
        </View>
        
     
    
      </Surface>
      </SafeAreaView>
      </KeyboardAvoidingView>
      

    
      <FooterComponent />
    </>
  )
}