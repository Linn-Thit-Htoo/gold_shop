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
import List_Supplier from '../../../api/Supplier/ListSupplierController';
export default function UpdateSupplierScreen({ history }) {
  const [supplierID,setSupplierID]=useState();
  const [supplierData, setSupplierData] = useState({});
  const [showLoading,setShowLoading]=useState(false);
  const [supplierList, setSupplierList] = useState([]);
  const [disabledInputData,setDisabledInputData]=useState(true);
  const [supplierName,setSupplierName]=useState("");
  const [phoneNumber,setPhoneNumber]=useState();
const [supplierAddress,setSupplierAddress]=useState("");
  const [respMessage,setRespMessage] = useState("");
  const title="Update Supplier";

  useEffect(() => {
    AsyncStorage.getItem('supplierID').then(supplierID=>{
        setSupplierID(supplierID);
        callAPI(supplierID);
    });
    AsyncStorage.getItem('supplierName').then(supplierName=>{
        setSupplierName(supplierName);
    });
    AsyncStorage.getItem('phoneNumber').then(phoneNumber=>{
        setPhoneNumber(phoneNumber);
    });
    AsyncStorage.getItem('supplierAddress').then(supplierAddress=>{
        setSupplierAddress(supplierAddress);
    });
    setDisabledInputData(false);
  }, []);
  const callAPI = (supplierID) =>{
    List_Supplier('false',supplierID,setSupplierList,setShowLoading);
  }
 
  const postBody={
    Supplier_ID:supplierID,
    Supplier_Name:supplierName,
    Supplier_Phone_Number:phoneNumber,
    Supplier_Address:supplierAddress,  
    Business_Name:"NKGoldShop",
    Update_By:"NK",
    
}
  return (
    <>
      <AppBarComponent title={title} disabledInputData={disabledInputData} postBody={postBody} />
      <KeyboardAvoidingView behavior='position' style={{width:'100%',height:'100%',padding:24,flex:1,justifyContent:'space-around',
     }}>
            <SafeAreaView>
       <Surface style={CustomerStyle.createCustomerScreen}>
        <View style={{ display: 'flex', flex: 1, alignItems: 'center' }}>                
          <Image source={customerIcon} style={[GlobalStyle.logoIcon, { marginTop: -10,marginBottom:20 }]} />          
                 
       {supplierList[0]?  (
  <View>
       <TextInput
            label="Name"
            keyboardType="default"
            mode="outlined"
            value={supplierName}
            theme={{ colors: { primary: theme.colors.secondary } }}
            style={GlobalStyle.textInput}
            right={<TextInput.Icon icon="account" style={GlobalStyle.textInputIcon} iconColor={theme.colors.primary}/>}
            onChangeText={value => [setSupplierName(value),value==="" || phoneNumber===undefined || supplierAddress==="" ?setDisabledInputData(true):setDisabledInputData(false)]}
            
          />
          <TextInput
            label="Phone Number"
            keyboardType="number-pad" 
            mode="outlined"
            value={phoneNumber}
            theme={{ colors: { primary: theme.colors.secondary } }}
            style={GlobalStyle.textInput}
            right={<TextInput.Icon icon="phone" style={GlobalStyle.textInputIcon} iconColor={theme.colors.primary} />}
            onChangeText={value => [setPhoneNumber(value),value==="" || supplierName==="" || supplierAddress==="" ?setDisabledInputData(true):setDisabledInputData(false)]}

          />

          {/* <TextInput
            label="Shop Name"
            keyboardType="default"
            // value={shopName}
            mode="outlined"
            theme={{ colors: { primary: theme.colors.secondary } }}
            style={GlobalStyle.textInput}
            right={<TextInput.Icon icon="store" style={GlobalStyle.textInputIcon} iconColor={theme.colors.primary} />}
            onChangeText={value => [setShopName(value),value==="" || phoneNumber===undefined || customerName==="" || shopAddress==="" ?setDisabledInputData(true):setDisabledInputData(false)]}
          />                     */}
            <TextInput
              label="Address"
              keyboardType="default"
              mode="outlined"
              value={supplierAddress}
              theme={{ colors: { primary: theme.colors.secondary } }}
              style={GlobalStyle.textInput}
              right={<TextInput.Icon icon="map-marker" style={GlobalStyle.textInputIcon} iconColor={theme.colors.primary} />}
              onChangeText={value => [setSupplierAddress(value),value==="" || phoneNumber===undefined  || supplierName==="" ?setDisabledInputData(true):setDisabledInputData(false)]}
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