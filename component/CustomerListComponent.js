import React, { useEffect, useState } from 'react';
import { Surface, Text, Button, Icon } from 'react-native-paper';
import {View, Image, Alert,ScrollView,ActivityIndicator } from 'react-native';
import customerIcon from '../assets/icons/customer.png';
import AppBarComponent from './AppBarComponent';
import CustomerStyle from '../style/CustomerStyle';
import theme from '../theme/theme';
import List_Customer from '../api/Customer/ListCustomerController';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Delete_Customer from '../api/Customer/DeleteCustomerController';
export default function CustomerListComponent({ history,title,  buttonName }) {
    const [customerList, setCustomerList] = useState([]);
    const [deletedID,setDeletedID]=useState();
    const [showLoading,setShowLoading]=useState(false);
    useEffect(() => {

        List_Customer(false, '%', setCustomerList,"Customer Screen", setShowLoading)

      
    }, []);  //call one time and clean 

const editBtn = async (customerID,Customer_Name,Customer_Phone_Number,Customer_Shop_Name,Customer_Shop_Address,Customer_CLV) => {
    try {
        await AsyncStorage.setItem('customerID', JSON.stringify(customerID));
        await AsyncStorage.setItem('customerName',Customer_Name);
        await AsyncStorage.setItem('phoneNumber',Customer_Phone_Number);
        await AsyncStorage.setItem('shopName',Customer_Shop_Name);
        await AsyncStorage.setItem('shopAddress',Customer_Shop_Address);
        await AsyncStorage.setItem('selectedCLV',Customer_CLV)
      history.push('/customer/update');
    } catch (error) {
     alert(error);
      
    }
  }
  

  const deleteBtn = (customerID) => {
    deletePressed(customerID);
}

const deletePressed=(customerID)=>{
    Alert.alert(
        "Warning",
        "Are you sure to delete?",

        [
            {
                text: "Cancel",
                onPress: () => {},
                style: "cancel",

            },
            { text: "OK", 
                onPress: () => {
                 Delete_Customer(customerID, setShowLoading);
                    setDeletedID(customerID);
                    
                }
            }
        ]
    );
}

    const customer_list = () => {
        return customerList.map(({Customer_ID,Customer_Name, Customer_Phone_Number, Customer_Shop_Name,Customer_Shop_Address,Customer_CLV }) => {
            return (
            <>

           { Customer_ID!==deletedID &&
                   <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                   <Surface elevation={4} style={CustomerStyle.surfaceList}>
                       <Image source={customerIcon} style={{ width: 30, height: 30, position: 'absolute', left: 20 }} />
                       <Text style={CustomerStyle.info}>{Customer_Name}</Text>
                       <Text style={CustomerStyle.info}>{Customer_Phone_Number}</Text>
                       <View style={{ alignSelf: 'flex-end', position: 'absolute', marginRight: 5, display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', fontSize: 45, }}>
                       <Button onPress={()=>{buttonName === "delete" ? deleteBtn(Customer_ID) : editBtn(Customer_ID,Customer_Name,Customer_Phone_Number,Customer_Shop_Name,Customer_Shop_Address,Customer_CLV)}}  icon={buttonName} theme={theme}  labelStyle={{ fontSize: 24 }}>
                       </Button>
                       
                   </View>
                       <Text style={CustomerStyle.info}>{Customer_Shop_Name}</Text>
                   </Surface>
               </View>
           }
         
            </>
                 
            )
        })
    }
    return (
        <>
        <AppBarComponent title={title} />
           <ScrollView>
           
           {showLoading ? 
             <ActivityIndicator size="large" color={theme.colors.primary} showLoading style={{ display:'flex', flex: 1,
        justifyContent: 'center',
    alignContent:'center',alignItems:'center',alignSelf:'center',flexGrow:1,
        }}/>
         :
    <View>{customer_list()}</View>
        }
            
           </ScrollView>
        </>
    )

}




