import { useState,useEffect } from 'react';
import { Image, Text, View, KeyboardAvoidingView,ActivityIndicator } from 'react-native';
import theme from '../theme/theme';
import GlobalStyle from '../style/GlobalStyle';
import saleIcon from '../assets/icons/sale.png';
import coinIcon from '../assets/icons/coin.png'
import weightIcon from '../assets/icons/weight.png';
import AppBarComponent from '../component/AppBarComponent';
import DropdownComponent from "./DropdownComponent";
import { Surface, TextInput,Button } from 'react-native-paper';
import FooterComponent from './FooterComponent';
import SelectDropdown from 'react-native-select-dropdown';
import List_Customer from '../api/Customer/ListCustomerController';
export default function SaleScreenComponent({ history, title }) {
  const [disabledInputData,setDisabledInputData]=useState(true);
  const [goldPrice,setGoldPrice]=useState();
  const [kyatWeight, setKyatWeight] = useState("");
  const [paeWeight, setPaeWeight] = useState("");
  const [ywayWeight,setYwayWeight] = useState("");
  const [totalAmount,setTotalAmount]=useState();
  const [recieveAmount,setRecieveAmount]=useState();
const [showLoading,setShowLoading] = useState(false);
const [customerList,setCustomerList] = useState([]);
const [selectedCustomerID, setSelectedCustomerID] = useState(null);
useEffect(()=>{
  List_Customer('false','%',setCustomerList,"Sale Create",setShowLoading);
},[]);
const postBody = {
  Customer_ID:selectedCustomerID,
  Gold_Price:goldPrice,
  Kyat_Weight:kyatWeight,
  Pae_Weight:paeWeight,
  Yway_Weight:ywayWeight,
  Total_Amount:totalAmount,
  Receive_Amount:recieveAmount,
  Business_Name:"NKGoldShop",
  Create_By:"NK"
}
  return (
    <>
      <AppBarComponent  title={title} disabledInputData={disabledInputData} postBody={postBody} />
      <KeyboardAvoidingView behavior='position' style={{width:'100%',height:'100%',padding:24,flex:1,justifyContent:'space-around'
          }}>
      <Surface style={GlobalStyle.surface}>
        <View style={{ display: 'flex', flex: 1, alignItems: 'center' }}>                
          <Image source={saleIcon} style={[GlobalStyle.logoIcon, { marginTop: -10, marginBottom:30 }]} />          
          {/* dropdown */}
          {showLoading ? <ActivityIndicator /> :
    <SelectDropdown
    defaultButtonText="Choose Customer"
        data={customerList}
        
        onSelect={(selectedItem, index) => {
            setSelectedCustomerID(selectedItem.customerID);
            // console.log(`Selected item: ${selectedItem.name}, ID: ${selectedItem.id}`);
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem.customerName;
        }}
        rowTextForSelection={(item) => {
            return item.customerName;
        }}
    />
}
          <TextInput
            label="Gold Price"
            keyboardType="number-pad"
            mode="outlined"
            theme={{ colors: { primary: theme.colors.secondary } }}
            style={GlobalStyle.textInput}
            right={<TextInput.Icon icon={coinIcon} style={GlobalStyle.saleInput} iconColor={theme.colors.primary} />}
            onChangeText={value => [setGoldPrice(value),value===undefined || kyatWeight===undefined || paeWeight==="" || totalAmount==="" || recieveAmount===undefined ?setDisabledInputData(true):setDisabledInputData(false)]}
          />
          <TextInput
            label="Kyat Weight"
            keyboardType="number-pad"
            mode="outlined"
            theme={{ colors: { primary: theme.colors.secondary } }}
            style={GlobalStyle.textInput}
            right={<TextInput.Icon icon={weightIcon} style={GlobalStyle.saleInput} iconColor={theme.colors.primary} />}
            onChangeText={value=>[setKyatWeight(value), value===undefined || goldPrice===undefined || paeWeight==="" || ywayWeight==="" ||totalAmount===undefined || recieveAmount===undefined ? setDisabledInputData(true):setDisabledInputData(false) ]}
          />
          <TextInput
            label="Pae Weight"
            keyboardType="number-pad"
            mode="outlined"
            theme={{ colors: { primary: theme.colors.secondary } }}
            style={GlobalStyle.textInput}
            right={<TextInput.Icon icon={weightIcon} style={GlobalStyle.saleInput} iconColor={theme.colors.primary} />}
            onChangeText={value=>[setPaeWeight(value), value===undefined || kyatWeight===""|| ywayWeight==="" || goldPrice===undefined || totalAmount===undefined || recieveAmount===undefined ? setDisabledInputData(true):setDisabledInputData(false) ]}
          />      
          <TextInput
            label="Yway Weight"
            keyboardType="number-pad"
            mode="outlined"
            theme={{ colors: { primary: theme.colors.secondary } }}
            style={GlobalStyle.textInput}
            right={<TextInput.Icon icon={weightIcon} style={GlobalStyle.saleInput} iconColor={theme.colors.primary} />}
            onChangeText={value=>[setYwayWeight(value), value===undefined || kyatWeight==="" || paeWeight==="" || goldPrice===undefined || totalAmount===undefined || recieveAmount===undefined ? setDisabledInputData(true):setDisabledInputData(false) ]}
          />                   
            <TextInput
              label="Total Amount"
              keyboardType="number-pad"
              mode="outlined"
              theme={{ colors: { primary: theme.colors.secondary } }}
              style={GlobalStyle.textInput}
              right={<TextInput.Icon icon={coinIcon} style={GlobalStyle.saleInput} iconColor={theme.colors.primary} />}
              onChangeText={value=>[setTotalAmount(value), value===undefined || kyatWeight==="" || paeWeight==="" || ywayWeight===""  || goldPrice===undefined || recieveAmount===undefined ? setDisabledInputData(true):setDisabledInputData(false) ]}
            />
            <TextInput
              label="Receive Amount"
              keyboardType="number-pad"
              mode="outlined"
              theme={{ colors: { primary: theme.colors.secondary } }}
              style={GlobalStyle.textInput}
              right={<TextInput.Icon icon={weightIcon} style={GlobalStyle.saleInput} iconColor={theme.colors.primary} />}
              onChangeText={value=>[setRecieveAmount(value), value===undefined || kyatWeight==="" || paeWeight==="" || ywayWeight==="" || totalAmount===undefined || goldPrice===undefined ? setDisabledInputData(true):setDisabledInputData(false) ]}
            />
        </View>
     
  
     
   
      </Surface>

      </KeyboardAvoidingView>
    </>
  )
}