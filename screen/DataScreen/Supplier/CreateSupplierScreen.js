import React,{ useState } from 'react';
import { Image, Text, View, KeyboardAvoidingView,SafeAreaView  } from 'react-native';
import theme from '../../../theme/theme';
import GlobalStyle from '../../../style/GlobalStyle';
import shopBag from "../../../assets/icons/shopping-bag.png";
import AppBarComponent from '../../../component/AppBarComponent';
import DropdownComponent from '../../../component/DropdownComponent';
import { Surface, TextInput,Button,Snackbar, useTheme} from 'react-native-paper';
import FooterComponent from '../../../component/FooterComponent';
import CustomerStyle from '../../../style/CustomerStyle';
import Create_Customer from '../../../api/Customer/CreateCustomerController';
export default function BuyScreenComponent({ history }) {
  const [disabledCreateBtn,setDisabledCreateBtn]=useState(true);
  const [supplierName,setSupplierName] = useState("");
  const [phoneNumber,setPhoneNumber] = useState();
  const [shopAddress,setShopAddress] = useState("");  
  const title="Create Supplier";
  const postBody={
    Supplier_Name:supplierName,
    Supplier_Phone_Number:phoneNumber,
    Supplier_Address:shopAddress,
    Create_By:"NK",
    Business_Name:"NKGoldShop"    
}
  return (
    <>
      <AppBarComponent title={title} postBody={postBody} disabledInputData={disabledCreateBtn} />
      {/* postBody={postBody} */}
      <KeyboardAvoidingView behavior='position' style={{width:'100%',height:'100%',padding:24,flex:1,justifyContent:'space-around',
     }}>
            <SafeAreaView>
       <Surface style={CustomerStyle.createCustomerScreen}>
        <View style={{ display: 'flex', flex: 1, alignItems: 'center' }}>                
        <Image source={shopBag} style={[GlobalStyle.logoIcon, { marginTop: -10,marginBottom:20 }]} />          
                 
          <TextInput
             label="Supplier Name"
             keyboardType="default"
             style={GlobalStyle.textInput}
             mode="outlined"
             theme={{ colors: { primary: theme.colors.secondary } }}
             onChangeText={value => [setSupplierName(value),value==="" || phoneNumber===undefined || shopAddress==="" ? setDisabledCreateBtn(true) : setDisabledCreateBtn(false)]}
             placeholderTextColor={theme.colors.primary}
             selectionColor={theme.colors.primary}
             right={<TextInput.Icon icon="account" style={GlobalStyle.textInputIcon} iconColor={theme.colors.primary}/>}
         />
              <TextInput
                label="Phone Number"
                keyboardType="number-pad"
                mode="outlined"
                theme={{ colors: { primary: theme.colors.secondary } }}
                style={GlobalStyle.textInput}
                right={<TextInput.Icon icon="phone" style={GlobalStyle.textInputIcon} iconColor={theme.colors.primary} />}
              onChangeText={value=>[setPhoneNumber(value),value ==="" || supplierName==="" || shopAddress==="" ? setDisabledCreateBtn(true) : setDisabledCreateBtn(false)]}
              />
               
               <TextInput
             label="Shop Address"
             keyboardType="default"
             style={GlobalStyle.textInput}
             mode="outlined"
             theme={{ colors: { primary: theme.colors.secondary } }}
             onChangeText={value => [setShopAddress(value),value==="" || supplierName==="" || phoneNumber===undefined ? setDisabledCreateBtn(true) : setDisabledCreateBtn(false)]}
             placeholderTextColor={theme.colors.primary}
             selectionColor={theme.colors.primary}
             right={<TextInput.Icon icon="map-marker" style={GlobalStyle.textInputIcon} iconColor={theme.colors.primary} />}
         />
          
        </View>
      
     
    
      </Surface>
      </SafeAreaView>
      </KeyboardAvoidingView>
      

    
      <FooterComponent />
    </>
  )
}