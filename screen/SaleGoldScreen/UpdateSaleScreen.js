import React,{ useState,useEffect } from 'react';
import { Image, Text, View, KeyboardAvoidingView,SafeAreaView,ActivityIndicator  } from 'react-native';
import theme from '../../theme/theme';
import GlobalStyle from '../../style/GlobalStyle';
import sale from "../../assets/icons/sale.png";
import AppBarComponent from '../../component/AppBarComponent';
import { Surface, TextInput,Button,Snackbar, useTheme} from 'react-native-paper';
import FooterComponent from '../../component/FooterComponent';
import CustomerStyle from '../../style/CustomerStyle';
import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from 'moment';
import List_Buy from "../../api/Buy/ListBuyController";
import List_Sale from '../../api/Sale/ListSaleController';
export default function UpdateSaleScreen({ history }) {
    const [saleID,setSaleID] = useState();
        const [customerID,setCustomerID] = useState();
        const [goldPrice,setGoldPrice] = useState();
        const [totalAmount,setTotalAmount] = useState();
        const [receiveAmount,setReceiveAmount] = useState();
  const [showLoading,setShowLoading]=useState(false);
  const [saleList, setSaleList] = useState([]);
  const [disabledInputData,setDisabledInputData]=useState(true);
  const [createDate,setCreateDate] = useState();
  const today=moment().format('YYYY-MM-DD');
  const title="Update Sale";
const [kyatWeight,setKyatWeight] = useState("");
const [paeWeight,setPaeWeight] = useState("");
const [ywayWeight,setYwayWeight] = useState("");
useEffect(() => {
  const loadData = async () => {
    const customerID = await AsyncStorage.getItem('customerID');
    const createDate = await AsyncStorage.getItem('createDate');
    const saleID = await AsyncStorage.getItem('saleID');
    const goldPrice = await AsyncStorage.getItem('goldPrice');
    const totalAmount = await AsyncStorage.getItem('totalAmount');
    const receiveAmount = await AsyncStorage.getItem('receiveAmount');
    const kyatWeight = await AsyncStorage.getItem('kyatWeight');
    const paeWeight = await AsyncStorage.getItem('paeWeight');
    const ywayWeight = await AsyncStorage.getItem('ywayWeight');
    setCustomerID(customerID);
    setCreateDate(createDate);
    callAPI(customerID, createDate);
    setSaleID(saleID);
    setGoldPrice(goldPrice);
    setTotalAmount(totalAmount);
    setReceiveAmount(receiveAmount);
    setKyatWeight(kyatWeight);
    setPaeWeight(paeWeight);
    setYwayWeight(ywayWeight);
    setDisabledInputData(false);
  };

  loadData().catch(err => alert(err));
  
}, []);

const callAPI = async (customerID, createDate) => {
await List_Sale(customerID,setSaleList,createDate,today,setShowLoading);

 
 
 
};

 
  const postBody={
    // FOR SALE UPDATE 
    Sale_ID:saleID,
    Customer_ID:customerID,
    Gold_Price:goldPrice,
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
          <Image source={sale} style={[GlobalStyle.logoIcon, { marginTop: -10,marginBottom:20 }]} />          
                 
       {saleList[0] ?  (
  <View>
          <TextInput
              label="Gold Price"
              keyboardType="number-pad"
              mode="outlined"
              value={goldPrice}
              theme={{ colors: { primary: theme.colors.secondary } }}
              style={GlobalStyle.textInput}
              right={<TextInput.Icon icon="account" style={GlobalStyle.textInputIcon} iconColor={theme.colors.primary}/>}
              onChangeText={value => [setGoldPrice(value),value=== "" || totalAmount===undefined || receiveAmount===undefined || kyatWeight==="" || paeWeight==="" || ywayWeight==="" ?setDisabledInputData(true):setDisabledInputData(false)]}
              
            />
             <TextInput
              label="Total Amount"
              keyboardType="number-pad"
              mode="outlined"
              value={totalAmount}
              theme={{ colors: { primary: theme.colors.secondary } }}
              style={GlobalStyle.textInput}
              right={<TextInput.Icon icon="account" style={GlobalStyle.textInputIcon} iconColor={theme.colors.primary}/>}
              onChangeText={value => [setTotalAmount(value),value==="" || goldPrice===undefined || receiveAmount===undefined || kyatWeight==="" || paeWeight==="" || ywayWeight==="" ?setDisabledInputData(true):setDisabledInputData(false)]}
              
            />
             <TextInput
              label="Receive Amount"
              keyboardType="number-pad"
              mode="outlined"
              value={receiveAmount}
              theme={{ colors: { primary: theme.colors.secondary } }}
              style={GlobalStyle.textInput}
              right={<TextInput.Icon icon="account" style={GlobalStyle.textInputIcon} iconColor={theme.colors.primary}/>}
              onChangeText={value => [setReceiveAmount(value),value==="" || totalAmount===undefined || goldPrice===undefined || kyatWeight==="" || paeWeight==="" || ywayWeight==="" ?setDisabledInputData(true):setDisabledInputData(false)]}
              
            />
              <TextInput
              label="Kyat Weight"
              keyboardType="number-pad"
              mode="outlined"
              value={kyatWeight}
              theme={{ colors: { primary: theme.colors.secondary } }}
              style={GlobalStyle.textInput}
              right={<TextInput.Icon icon="account" style={GlobalStyle.textInputIcon} iconColor={theme.colors.primary}/>}
              onChangeText={value => [setKyatWeight(value),value==="" || totalAmount===undefined || goldPrice===undefined || receiveAmount===undefined || paeWeight==="" || ywayWeight==="" ?setDisabledInputData(true):setDisabledInputData(false)]}
              
            />
             <TextInput
              label="Pae Weight"
              keyboardType="number-pad"
              mode="outlined"
              value={paeWeight}
              theme={{ colors: { primary: theme.colors.secondary } }}
              style={GlobalStyle.textInput}
              right={<TextInput.Icon icon="account" style={GlobalStyle.textInputIcon} iconColor={theme.colors.primary}/>}
              onChangeText={value => [setPaeWeight(value),value==="" || totalAmount===undefined || goldPrice===undefined || receiveAmount===undefined || kyatWeight==="" || ywayWeight==="" ?setDisabledInputData(true):setDisabledInputData(false)]}
              
            />
             <TextInput
              label="Yway Weight"
              keyboardType="number-pad"
              mode="outlined"
              value={ywayWeight}
              theme={{ colors: { primary: theme.colors.secondary } }}
              style={GlobalStyle.textInput}
              right={<TextInput.Icon icon="account" style={GlobalStyle.textInputIcon} iconColor={theme.colors.primary}/>}
              onChangeText={value => [setYwayWeight(value),value==="" || totalAmount===undefined || goldPrice===undefined || receiveAmount===undefined || kyatWeight==="" || paeWeight==="" ?setDisabledInputData(true):setDisabledInputData(false)]}
              
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