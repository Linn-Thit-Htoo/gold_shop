import {useState,useEffect} from 'react';
import {Text,Button,Surface,Snackbar} from 'react-native-paper';
import customerIcon from '../../assets/icons/customer.png';
import AppBarComponent from '../../component/AppBarComponent';
import CustomerStyle from '../../style/CustomerStyle';
import theme from '../../theme/theme';
import {SafeAreaView,View,Image,ActivityIndicator,ScrollView,Alert} from 'react-native';
import List_Debit from '../../api/Debit/GetDebitController';
import Delete_Debit from '../../api/Debit/DeleteDebitController';

const CustomerDebitScreen=({history})=> {
    const [debitList,setDebitList] = useState([]);
    const [showLoading,setShowLoading] = useState(false);
    const [deletedID,setDeletedID] = useState(0);
    const [deletedMsg,setDeletedMsg] = useState("");
    const [visible, setVisible] = useState(false);
    const onDismissSnackBar = () => setVisible(false);
    useEffect(()=>{
        List_Debit('%','Customer',setShowLoading,setDebitList);
    },[]);
    const deleteBtn = (Sale_ID) => {
        deletePressed(Sale_ID);
    }
    
    const deletePressed=(Sale_ID)=>{
        Alert.alert(
            "Warning",
            "Are you sure this customer has given all his debit",
    
            [
                {
                    text: "Cancel",
                    onPress: () => {},
                    style: "cancel",
    
                },
                { text: "OK", 
                    onPress: () => {
                     Delete_Debit(Sale_ID,'Customer',setShowLoading,setDeletedMsg);
                        setDeletedID(Sale_ID);
                        
                    }
                }
            ]
        );
    }
    const debit_list = () => {
        return debitList.map(({Sale_ID,Customer_ID,Gold_Price,Kyat_Weight,Pae_Weight,Yway_Weight,Total_Amount,Receive_Amount})=>{
            return (
                <>
                 {Sale_ID!==deletedID && 
                 <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                 <Surface elevation={4} style={CustomerStyle.surfaceList}>
                     <Image source={customerIcon} style={{ width: 30, height: 30, position: 'absolute', left: 20 }} />
                     <Text style={CustomerStyle.info}>{Customer_ID}</Text>
                     <Text style={CustomerStyle.info}> {Gold_Price} </Text>
                     <View style={{ alignSelf: 'flex-end', position: 'absolute', marginRight: 5, display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', fontSize: 45, }}>
                     <Button  icon="delete" theme={theme}  labelStyle={{ fontSize: 24 }} onPress={()=>{deleteBtn(Sale_ID)}}>
                     </Button>
                     
                 </View>
                     <Text style={CustomerStyle.info}> {Total_Amount} </Text>
                 </Surface>
             </View>
             }
                </>
            )
        })
        
    }
    return (
        <>
        <AppBarComponent title="Customer Debit" />
       <SafeAreaView>
     <ScrollView>
     {showLoading?
    <ActivityIndicator size="large" color={theme.colors.primary} showLoading style={{ display:'flex', flex: 1,
    justifyContent: 'center',
alignContent:'center',alignItems:'center',alignSelf:'center',flexGrow:1,
    }}/>
    : 
    <View>{debit_list()}</View>  
    }
     </ScrollView>
       </SafeAreaView>
       {
        deletedMsg && 
        <Snackbar
        visible={true}
        onDismiss={onDismissSnackBar}
        action={{
          label: 'Undo',
          onPress: () => {
            // Do something
          },
        }}>
          {deletedMsg}
</Snackbar>
      }

        </>
    )
}
export default CustomerDebitScreen;