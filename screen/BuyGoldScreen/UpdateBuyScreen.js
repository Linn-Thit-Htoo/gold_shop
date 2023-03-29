import React,{ useState,useEffect } from 'react';
import { Image, Text, View, KeyboardAvoidingView,SafeAreaView,ActivityIndicator  } from 'react-native';
import theme from '../../theme/theme';
import GlobalStyle from '../../style/GlobalStyle';
import buy from "../../assets/icons/buy.png";
import AppBarComponent from '../../component/AppBarComponent';
import { Surface, TextInput,Button,Snackbar, useTheme} from 'react-native-paper';
import FooterComponent from '../../component/FooterComponent';
import CustomerStyle from '../../style/CustomerStyle';
import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from 'moment';
import List_Buy from "../../api/Buy/ListBuyController";
export default function UpdateCustomerScreen({ history }) {
    const [buyID,setBuyID] = useState();
        const [supplierID,setSupplierID] = useState();
        const [price,setPrice] = useState();
        const [totalAmount,setTotalAmount] = useState();
        const [receiveAmount,setReceiveAmount] = useState();
  const [showLoading,setShowLoading]=useState(false);
  const [buyList, setBuyList] = useState([]);
  const [disabledInputData,setDisabledInputData]=useState(true);
  const [createDate,setCreateDate] = useState();
  const today=moment().format('YYYY-MM-DD');
  const title="Update Buy";
const [kyatWeight,setKyatWeight] = useState("");
const [paeWeight,setPaeWeight] = useState("");
const [ywayWeight,setYwayWeight] = useState("");
useEffect(() => {
  const loadData = async () => {
    const supplierID = await AsyncStorage.getItem('supplierID');
    const createDate = await AsyncStorage.getItem('createDate');
    const buyID = await AsyncStorage.getItem('buyID');
    const price = await AsyncStorage.getItem('price');
    const totalAmount = await AsyncStorage.getItem('totalAmount');
    const receiveAmount = await AsyncStorage.getItem('receiveAmount');
    const kyatWeight = await AsyncStorage.getItem('kyatWeight');
    const paeWeight = await AsyncStorage.getItem('paeWeight');
    const ywayWeight = await AsyncStorage.getItem('ywayWeight');
    setSupplierID(supplierID);
    setCreateDate(createDate);
    callAPI(supplierID, createDate);
    setBuyID(buyID);
    setPrice(price);
    setTotalAmount(totalAmount);
    setReceiveAmount(receiveAmount);
    setKyatWeight(kyatWeight);
    setPaeWeight(paeWeight);
    setYwayWeight(ywayWeight);
    setDisabledInputData(false);
  };

  loadData().catch(err => alert(err));
  
}, []);

const callAPI = async (supplierID, createDate) => {
  await List_Buy(supplierID,setBuyList,createDate,today,setShowLoading);
  console.log(buyList);

 
 
 
};

 
  const postBody={
    // for buy update 
    Buy_ID:buyID,
    Supplier_ID:supplierID,
    Price:price,
    Kyat_Weight:kyatWeight,
    Pae_Weight:paeWeight,
    Yway_Weight:ywayWeight,
    Total_Amount:totalAmount,
    Receive_Amount:receiveAmount,
    Business_Name:"NKGoldShop",
    Update_By:"NK"
}
  return (
    <>
      <AppBarComponent title={title} postBody={postBody}  disabledInputData={disabledInputData} />
      <KeyboardAvoidingView behavior='position' style={{width:'100%',height:'100%',padding:24,flex:1,justifyContent:'space-around',
     }}>
            <SafeAreaView>
       <Surface style={CustomerStyle.createCustomerScreen}>
        <View style={{ display: 'flex', flex: 1, alignItems: 'center' }}>                
          <Image source={buy} style={[GlobalStyle.logoIcon, { marginTop: -10,marginBottom:20 }]} />          
                 
       {buyList[0] ?  (
  <View>
          <TextInput
              label="Price"
              keyboardType="number-pad"
              mode="outlined"
              value={price}
              theme={{ colors: { primary: theme.colors.secondary } }}
              style={GlobalStyle.textInput}
              right={<TextInput.Icon icon="account" style={GlobalStyle.textInputIcon} iconColor={theme.colors.primary}/>}
              onChangeText={value => [setPrice(value),value=== "" || totalAmount===undefined || receiveAmount===undefined ?setDisabledInputData(true):setDisabledInputData(false)]}
              
            />
             <TextInput
              label="Total Amount"
              keyboardType="number-pad"
              mode="outlined"
              value={totalAmount}
              theme={{ colors: { primary: theme.colors.secondary } }}
              style={GlobalStyle.textInput}
              right={<TextInput.Icon icon="account" style={GlobalStyle.textInputIcon} iconColor={theme.colors.primary}/>}
              onChangeText={value => [setTotalAmount(value),value==="" || price===undefined || receiveAmount===undefined ?setDisabledInputData(true):setDisabledInputData(false)]}
              
            />
             <TextInput
              label="Receive Amount"
              keyboardType="number-pad"
              mode="outlined"
              value={receiveAmount}
              theme={{ colors: { primary: theme.colors.secondary } }}
              style={GlobalStyle.textInput}
              right={<TextInput.Icon icon="account" style={GlobalStyle.textInputIcon} iconColor={theme.colors.primary}/>}
              onChangeText={value => [setReceiveAmount(value),value==="" || totalAmount===undefined || price===undefined ?setDisabledInputData(true):setDisabledInputData(false)]}
              
            />
              <TextInput
              label="Kyat Weight"
              keyboardType="number-pad"
              mode="outlined"
              value={kyatWeight}
              theme={{ colors: { primary: theme.colors.secondary } }}
              style={GlobalStyle.textInput}
              right={<TextInput.Icon icon="account" style={GlobalStyle.textInputIcon} iconColor={theme.colors.primary}/>}
              onChangeText={value => [setReceiveAmount(value),value==="" || totalAmount===undefined || price===undefined ?setDisabledInputData(true):setDisabledInputData(false)]}
              
            />
             <TextInput
              label="Pae Weight"
              keyboardType="number-pad"
              mode="outlined"
              value={paeWeight}
              theme={{ colors: { primary: theme.colors.secondary } }}
              style={GlobalStyle.textInput}
              right={<TextInput.Icon icon="account" style={GlobalStyle.textInputIcon} iconColor={theme.colors.primary}/>}
              onChangeText={value => [setReceiveAmount(value),value==="" || totalAmount===undefined || price===undefined ?setDisabledInputData(true):setDisabledInputData(false)]}
              
            />
             <TextInput
              label="Yway Weight"
              keyboardType="number-pad"
              mode="outlined"
              value={ywayWeight}
              theme={{ colors: { primary: theme.colors.secondary } }}
              style={GlobalStyle.textInput}
              right={<TextInput.Icon icon="account" style={GlobalStyle.textInputIcon} iconColor={theme.colors.primary}/>}
              onChangeText={value => [setReceiveAmount(value),value==="" || totalAmount===undefined || price===undefined ?setDisabledInputData(true):setDisabledInputData(false)]}
              
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