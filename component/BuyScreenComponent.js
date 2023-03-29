import { useState,useEffect } from 'react';
import { Image, Text, View, KeyboardAvoidingView,ScrollView,TouchableOpacity,ActivityIndicator } from 'react-native';
import theme from '../theme/theme';
import GlobalStyle from '../style/GlobalStyle';
import buy from "../assets/icons/buy.png";
import coinIcon from '../assets/icons/coin.png'
import weightIcon from '../assets/icons/weight.png';
import AppBarComponent from '../component/AppBarComponent';
import ModalDropdown from 'react-native-modal-dropdown';
import { Surface, TextInput,Button } from 'react-native-paper';
import FooterComponent from './FooterComponent';
import List_Supplier from '../api/Supplier/ListSupplierController';
import SelectDropdown from 'react-native-select-dropdown';
export default function BuyScreenComponent({ history, title }) {
  const [supplierList, setSupplierList] = useState([]);
  const [items, setItems] = useState();
  const [disabledInputData,setDisabledInputData]=useState(true);
  const [goldPrice,setGoldPrice] = useState();
  const [kyatWeight,setKyatWeight] = useState("");
  const [paeWeight,setPaeWeight]=useState("");
  const [ywayWeight,setYwayWeight] = useState("");
const [totalAmount,setTotalAmount] = useState();
const [recieveAmount,setRecieveAmount] = useState();
const [showLoading,setShowLoading]=useState(false);
const [selectedSupplierID, setSelectedSupplierID] = useState(null);
const [selectedSupplier, setSelectedSupplier] = useState({ name: '', id: null });
useEffect(() => {
  List_Supplier(false, '%', setSupplierList,"Buy Screen",setShowLoading);
}, []);

  const postBody = {
      Supplier_ID:selectedSupplierID,
      Price:goldPrice,
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
     <ScrollView>
     <Surface style={GlobalStyle.surface}>
        <View style={{ display: 'flex', flex: 1, alignItems: 'center' }}>                
          <Image source={buy} style={[GlobalStyle.logoIcon, { marginTop: -10,marginBottom:30 }]} />          
{showLoading ? <ActivityIndicator /> :
    <SelectDropdown
    defaultButtonText="Choose Supplier"
        data={supplierList}
        
        onSelect={(selectedItem, index) => {
            setSelectedSupplierID(selectedItem.supplierID);
            // console.log(`Selected item: ${selectedItem.name}, ID: ${selectedItem.id}`);
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem.supplierName;
        }}
        rowTextForSelection={(item) => {
            return item.supplierName;
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
            onChangeText={value => [setGoldPrice(value),value==="" || kyatWeight==="" || paeWeight==="" || ywayWeight==="" || totalAmount===undefined || recieveAmount===undefined?setDisabledInputData(true):setDisabledInputData(false)]}
          />
          <TextInput
            label="Kyat Weight"
            keyboardType="number-pad"
            mode="outlined"
            theme={{ colors: { primary: theme.colors.secondary } }}
            style={GlobalStyle.textInput}
            right={<TextInput.Icon icon={weightIcon} style={GlobalStyle.saleInput} iconColor={theme.colors.primary} />}
            onChangeText={value => [setKyatWeight(value),value==="" || goldPrice===undefined || paeWeight==="" || ywayWeight==="" || totalAmount===undefined || recieveAmount===undefined?setDisabledInputData(true):setDisabledInputData(false)]}
          />
          <TextInput
            label="Pae Weight"
            keyboardType="number-pad"
            mode="outlined"
            theme={{ colors: { primary: theme.colors.secondary } }}
            style={GlobalStyle.textInput}
            right={<TextInput.Icon icon={weightIcon} style={GlobalStyle.saleInput} iconColor={theme.colors.primary} />}
            onChangeText={value => [setPaeWeight(value),value==="" || kyatWeight==="" || goldPrice===undefined || ywayWeight==="" || totalAmount===undefined || recieveAmount===undefined?setDisabledInputData(true):setDisabledInputData(false)]}
          /> 
          <TextInput
            label="Yway Weight"
            keyboardType="number-pad"
            mode="outlined"
            theme={{ colors: { primary: theme.colors.secondary } }}
            style={GlobalStyle.textInput}
            right={<TextInput.Icon icon={weightIcon} style={GlobalStyle.saleInput} iconColor={theme.colors.primary} />}
            onChangeText={value => [setYwayWeight(value),value==="" || kyatWeight==="" || paeWeight==="" || goldPrice===undefined || totalAmount===undefined || recieveAmount===undefined?setDisabledInputData(true):setDisabledInputData(false)]}
          />                          
            <TextInput
              label="Total Amount"
              keyboardType="number-pad"
              mode="outlined"
              theme={{ colors: { primary: theme.colors.secondary } }}
              style={GlobalStyle.textInput}
              right={<TextInput.Icon icon={coinIcon} style={GlobalStyle.saleInput} iconColor={theme.colors.primary} />}
              onChangeText={value => [setTotalAmount(value),value==="" || kyatWeight==="" || paeWeight==="" || ywayWeight==="" || goldPrice===undefined || recieveAmount===undefined?setDisabledInputData(true):setDisabledInputData(false)]}
            />
            <TextInput
              label="Receive Amount"
              keyboardType="number-pad"
              mode="outlined"
              theme={{ colors: { primary: theme.colors.secondary } }}
              style={GlobalStyle.textInput}
              right={<TextInput.Icon icon={weightIcon} style={GlobalStyle.saleInput} iconColor={theme.colors.primary} />}
              onChangeText={value => [setRecieveAmount(value),value==="" || kyatWeight==="" || paeWeight==="" || ywayWeight==="" || totalAmount===undefined || goldPrice===undefined?setDisabledInputData(true):setDisabledInputData(false)]}
            />
        </View>
     
     
     
     
      </Surface>
     </ScrollView>

      </KeyboardAvoidingView>
    </>
  )
}