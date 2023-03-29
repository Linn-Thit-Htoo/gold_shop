import React,{ useState } from 'react';
import { Image, Text, View, KeyboardAvoidingView,SafeAreaView  } from 'react-native';
import theme from '../../../theme/theme';
import GlobalStyle from '../../../style/GlobalStyle';
import customerIcon from "../../../assets/icons/customer.png"
import AppBarComponent from '../../../component/AppBarComponent';
import DropdownComponent from '../../../component/DropdownComponent';
import { Surface, TextInput,Button,Snackbar, useTheme} from 'react-native-paper';
import FooterComponent from '../../../component/FooterComponent';
import CustomerStyle from '../../../style/CustomerStyle';
import Create_Customer from '../../../api/Customer/CreateCustomerController';
export default function BuyScreenComponent({ history }) {
  const [disabledInputData,setDisabledInputData]=useState(true);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'New', value: 'New' },
    { label: 'Old', value: 'Old' },
  ]);
  const [kyatWeight, setKyatWeight] = useState(0);
  const [selectedCLV,setSelectedCLV]=useState("");
  const [customerName,setCustomerName]=useState("");
  const [phoneNumber,setPhoneNumber]=useState();
  const [shopName,setShopName]=useState("");
  const [shopAddress,setShopAddress]=useState("");
  const [respMessage,setRespMessage] = useState("");
  const title="Create Customer";
  const postBody={
    Customer_Name:customerName,
  Customer_Phone_Number:phoneNumber,
   Customer_CLV:value,
  Customer_Shop_Name:shopName,
  Customer_Shop_Address:shopAddress,
  Create_By:"NK",
  Business_Name:"NKGoldShop"    
}

  return (
    <>
      <AppBarComponent title={title} postBody={postBody} disabledInputData={disabledInputData}  />
      <KeyboardAvoidingView behavior='position' style={{width:'100%',height:'100%',padding:24,flex:1,justifyContent:'space-around',
     }}>
            <SafeAreaView>
       <Surface style={CustomerStyle.createCustomerScreen}>
        <View style={{ display: 'flex', flex: 1, alignItems: 'center' }}>                
          <Image source={customerIcon} style={[GlobalStyle.logoIcon, { marginTop: -10,marginBottom:20 }]} />          
                 
          <TextInput
            label="Name"
            value={customerName}
            keyboardType="default"
            mode="outlined"
            theme={{ colors: { primary: theme.colors.secondary } }}
            style={GlobalStyle.textInput}
            right={<TextInput.Icon icon="account" style={GlobalStyle.textInputIcon} iconColor={theme.colors.primary}/>}
            onChangeText={value => [setCustomerName(value),value==="" || phoneNumber===undefined || shopName==="" || shopAddress==="" ?setDisabledInputData(true):setDisabledInputData(false)]}
          />
          <TextInput
            label="Phone Number"
            value={phoneNumber}
            keyboardType="number-pad" 
            mode="outlined"
            theme={{ colors: { primary: theme.colors.secondary } }}
            style={GlobalStyle.textInput}
            right={<TextInput.Icon icon="phone" style={GlobalStyle.textInputIcon} iconColor={theme.colors.primary} />}
            onChangeText={value => [setPhoneNumber(value),value==="" || customerName==="" || shopName==="" || shopAddress==="" ?setDisabledInputData(true):setDisabledInputData(false)]}

          />
           <DropdownComponent
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            placeholder="Choose Customer"
            zIndex={10}
         

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
              value={shopAddress}
              mode="outlined"
              theme={{ colors: { primary: theme.colors.secondary } }}
              style={GlobalStyle.textInput}
              right={<TextInput.Icon icon="map-marker" style={GlobalStyle.textInputIcon} iconColor={theme.colors.primary} />}
              onChangeText={value => [setShopAddress(value),value==="" || phoneNumber===undefined || shopName==="" || customerName==="" ?setDisabledInputData(true):setDisabledInputData(false)]}
            />
          
        </View>
      
     
    
      </Surface>
      </SafeAreaView>
      </KeyboardAvoidingView>
      

    
      <FooterComponent />
    </>
  )
}