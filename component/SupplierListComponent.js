import React, { useEffect, useState } from 'react';
import { Surface, Text,Button,Snackbar } from 'react-native-paper';
import shopBag from "../assets/icons/shopping-bag.png";
import AppBarComponent from './AppBarComponent';
import CustomerStyle from '../style/CustomerStyle';
import {View,Image,Alert,ActivityIndicator,ScrollView} from "react-native";
import FooterComponent from './FooterComponent';
import theme from '../theme/theme';
import List_Supplier from '../api/Supplier/ListSupplierController';
import Delete_Supplier from '../api/Supplier/DeleteSupplierController';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function SupplierListComponent({history,title,buttonName}){
  const [showLoading,setShowLoading]=useState(false);
  const [deletedID,setDeletedID]=useState();
  const [respMessage,setRespMessage] = useState("");
  const [visible, setVisible] = useState(false);
  const onDismissSnackBar = () => setVisible(false);
  const [supplierList, setSupplierList] = useState([]);
  useEffect(() => {

    List_Supplier(false, '%', setSupplierList, "Supplier Screen",setShowLoading)

  
}, []);  //call one time and clean 
const deleteBtn =  (supplierID) => {
    deletePressed(supplierID);
}
    const deletePressed = (supplierID) => {
      
        Alert.alert(
            "Warning",
            "Are you sure to delete?",
            [
                {
                    text: "Cancel",
                    // onPress: () => setChecked(checked),
                    style: "cancel",

                },
                { text: "OK",
                onPress:()=>{Delete_Supplier(supplierID,setShowLoading)
                    setDeletedID(supplierID);
                    const resMsg = "Deleted Successfully!";
                    setRespMessage(resMsg);
                    setVisible(true);
                }
            }
            ]
        );
    }
const editBtn = (Supplier_ID,Supplier_Name,Supplier_Phone_Number,Supplier_Address ) => {
    try {
         AsyncStorage.setItem('supplierID', JSON.stringify(Supplier_ID));
         AsyncStorage.setItem('supplierName',Supplier_Name);
         AsyncStorage.setItem('phoneNumber',Supplier_Phone_Number);
         AsyncStorage.setItem('supplierAddress',Supplier_Address);
         history.push('/supplier/update');
         
    }catch {

    }
}

    const supplier_list = () => {
      return supplierList.map(({Supplier_ID,Supplier_Name,Supplier_Phone_Number,Supplier_Address }) => {
          return (
          <>

    
{
    Supplier_ID!==deletedID && 
    <View style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:10}}>
        <Surface elevation={4} style={CustomerStyle.surfaceList}>
          <Image source={shopBag} style={{width:30,height:30,position:'absolute',left:20}}/>      
          <Text style={CustomerStyle.info}>{Supplier_Name}</Text>
          <Text style={CustomerStyle.info}>{Supplier_Phone_Number}</Text>
          <View style={{ alignSelf: 'flex-end', position: 'absolute', marginRight: 5, display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', fontSize: 45, }}>
                        <Button  onPress={() => {buttonName === "delete" ? deleteBtn(Supplier_ID) : editBtn(Supplier_ID,Supplier_Name,Supplier_Phone_Number,Supplier_Address )}} icon={buttonName} theme={theme}  labelStyle={{ fontSize: 24 }}>
                       
                        </Button>
                        
                    </View>
          <Text style={CustomerStyle.info}>{Supplier_Address}</Text>      
        </Surface>
      </View>
   
}
       
          </>
               
          )
      })
  }
    return(
        <>
        <AppBarComponent title={title}/>
        <ScrollView>
        {showLoading ? 
             <ActivityIndicator size="large" color={theme.colors.primary} showLoading style={{ display:'flex', flex: 1,
        justifyContent: 'center',
    alignContent:'center',alignItems:'center',alignSelf:'center',flexGrow:1,
        }}/>
         :
    <View>{supplier_list()}
          
    </View>
        }

<Snackbar
  visible={visible}
  onDismiss={onDismissSnackBar}
  action={{
    label: 'Undo',
    onPress: () => {
      // Do something
    },
  }}>
{respMessage}
</Snackbar>
        </ScrollView>
       


      
        </>        
    )

}
