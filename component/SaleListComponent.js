import { useState,useEffect } from "react";
import AppBarComponent from "./AppBarComponent";
import DropdownComponent from "./DropdownComponent";
import { View, KeyboardAvoidingView, TouchableOpacity, Image, SafeAreaView, ScrollView, StatusBar, Switch, Alert,ActivityIndicator } from "react-native";
import { Surface, TextInput, Button, Text, Checkbox,Snackbar } from "react-native-paper";
import GlobalStyle from "../style/GlobalStyle";
import theme from "../theme/theme";
import CustomerStyle from "../style/CustomerStyle";
import moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';

// import DateTimePickerModal from "react-native-modal-datetime-picker";
import calendar from "../assets/icons/calendar.png";
import sale from "../assets/icons/sale.png";
import FooterComponent from "./FooterComponent";
import SelectDropdown from 'react-native-select-dropdown';
import AsyncStorage from "@react-native-async-storage/async-storage";
import List_Customer from "../api/Customer/ListCustomerController";
import List_Sale from "../api/Sale/ListSaleController";
import Delete_Sale from "../api/Sale/DeleteSaleController";
export default function SaleListComponent({ history, icon, title, iconName,buttonName }) {
  // deleted buy id
  const [deletedID,setdeletedID] = useState();
  // for deleted successfully message 
  const [deletedMsg,setDeletedMsg] = useState("");

  const [visible, setVisible] = useState(false);
  const onDismissSnackBar = () => setVisible(false);
  //for show loading 
  const [showLoading,setShowLoading]=useState(false);
    const deleteBtn = (saleID) => {
       deletePressed(saleID);
    }
    const deletePressed = (saleID) => {
      Alert.alert(
        "Warning",
        "Are you sure to delete",
        [
            {
                text: "Cancel",
                // onPress: () => setChecked(checked),
                style: "cancel",

            },
            { text: "OK", 
              onPress : () => {
                setdeletedID(saleID);
                Delete_Sale(saleID,setShowLoading,setDeletedMsg);
              }
            }
        ]
    );
    }
    // FOR EDIT 
    const editBtn = (Sale_ID,Customer_ID,Gold_Price,Kyat_Weight,Pae_Weight,Yway_Weight,Total_Amount,Receive_Amount,Create_Date) => {
          try {
        AsyncStorage.setItem('saleID',JSON.stringify(Sale_ID));
        AsyncStorage.setItem('customerID',JSON.stringify(Customer_ID));
        AsyncStorage.setItem('goldPrice',JSON.stringify(Gold_Price));
        AsyncStorage.setItem('totalAmount',JSON.stringify(Total_Amount));
        AsyncStorage.setItem('receiveAmount',JSON.stringify(Receive_Amount));
        const formattedDate = Create_Date.split("T")[0];
        AsyncStorage.setItem('createDate',formattedDate);
        AsyncStorage.setItem('kyatWeight',Kyat_Weight);
        AsyncStorage.setItem('paeWeight',Pae_Weight);
        AsyncStorage.setItem('ywayWeight',Yway_Weight);
        history.push('/sale/update');
      }catch {
        alert("error");
      }
    }
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);
  const [selectedFromDate,setSelectedFromDate] = useState(new Date());
  const [fromDatePicker,setFromDatePicker] = useState(false);
  const [selectedToDate,setSelectedToDate] = useState(new Date());
  const [toDatePicker,setToDatePicker] = useState(false);
    const onChangeFromDate = (event, date) => {
      setFromDatePicker(false);
      if (date !== undefined) {
        setSelectedFromDate(date);
      }
    };
    const onChangeToDate = (event, date) => {
      setToDatePicker(false);
      if (date !== undefined) {
        setSelectedToDate(date);
      }
    };

    //FOR SUPPLIER LIST
    // const [supplierList,setSupplierList] = useState([]);
    const [customerList, setCustomerList] = useState([{ customerID: "%", customerName: "All" }]);
    //FOR DATE PICKER 
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);
    // FORMATTED CREATE DATE 
    const [formattedCreateDate,setFormattedCreateDate]=useState();
    // DROPDOWN SELECTED DATA 
    const [selectedCustomerID, setSelectedCustomerID] = useState();
    const today=moment().format('YYYY-MM-DD');
    // FOR SALE LIST
    const [saleList,setSaleList]=useState([]);
    useEffect(() => {

        List_Customer('false','%',setCustomerList,"Sale Create",setShowLoading);
        // List_Buy('%',setBuyList,today,today,setShowLoading);
        List_Sale('%',setSaleList,today,today,setShowLoading);
        
      }, []);
     
    const filterBtn = () =>{
      //  console.log("id",selectedSupplierID)
       const formattedFromDate = selectedFromDate.toISOString().split("T")[0];
       const formattedToDate = selectedToDate.toISOString().split("T")[0];
        if(!selectedCustomerID){
            List_Sale('%',setSaleList,today,today,setShowLoading);
          }else if(selectedCustomerID==='%'){
            List_Sale('%',setSaleList,today,today,setShowLoading);
          }
          else {
            List_Sale(selectedCustomerID,setSaleList,formattedFromDate,formattedToDate,setShowLoading);
          }
    }
    
    const sale_list = () =>{
     return  saleList.map(({Sale_ID,Customer_ID,Gold_Price,Kyat_Weight,Pae_Weight,Yway_Weight,Total_Amount,Receive_Amount,Customer_Name,Create_Date})=>{
         return (
             <>
             
                 {/* <SafeAreaView style={{
                    flex: 1,
                    paddingTop: StatusBar.currentHeight,
                }}>
                    <ScrollView contentContainerStyle={{ padding: 40, marginTop: -50, }} > */}
                        {
                          Sale_ID !== deletedID &&
                          <View style={CustomerStyle.saleListView}>
                          <Surface elevation={4} style={CustomerStyle.surfaceList}>
                              <Image source={sale} style={{ width: 30, height: 30, position: 'absolute', left: 20 }} />
                              {/* <Text style={CustomerStyle.info}> {Customer_Name} </Text> */}
                              <Text style={CustomerStyle.info}>Gold Price: {Gold_Price} MMK</Text>
                              <Text style={CustomerStyle.info}>Total: {Total_Amount} MMK</Text>
                              <View style={{ alignSelf: 'flex-end', position: 'absolute', marginRight:5 }}>
                                  <Button icon={buttonName}
                                  labelStyle={{fontSize:24}}
                                     theme={theme}
                                      onPress={() => {
                                         buttonName==="delete" ? deleteBtn(Sale_ID) : editBtn(Sale_ID,Customer_ID,Gold_Price,Kyat_Weight,Pae_Weight,Yway_Weight,Total_Amount,Receive_Amount,Create_Date);
                                          
                                      }}
                                     
                                      >

                                      </Button>
                              </View>

                              <Text style={CustomerStyle.info}>Recieve: {Receive_Amount} MMK</Text>
                          </Surface>
                      </View>
                        }
                    {/* </ScrollView>
                </SafeAreaView> */}
             </>
         )
     
       })
    }

    
    return (

        <>
                 <AppBarComponent title={title} />

<Surface style={GlobalStyle.surface}>
    <Image source={sale} style={GlobalStyle.logoIcon} />
    <View style={{
        marginTop: 35,
    }}>
      {showLoading ? <ActivityIndicator /> :
      <SelectDropdown
data={customerList}
defaultButtonText="All"
onSelect={(selectedItem, index) => {
setSelectedCustomerID(selectedItem.customerID);
const formattedDate = moment(selectedItem.Create_Date).format('YYYY-MM-DD');
setFormattedCreateDate(formattedDate);
}}
buttonTextAfterSelection={(selectedItem, index) => {
  console.log(selectedItem);
return selectedItem.customerName;
}}
rowTextForSelection={(item) => {
return item.customerName;
}}
/>
}

    </View>
 
    <View>
    <Text style={{ fontSize:15, fontWeight:'bold' }}>From Date</Text>
    <TouchableOpacity onPress={() => setFromDatePicker(true)}>
<View>
    
<Text style={{ backgroundColor:'grey', textAlign:'center', fontSize:20 }}>  {selectedFromDate.toLocaleDateString()}</Text>

</View>
      </TouchableOpacity>
      {fromDatePicker && (
        <DateTimePicker
        value={selectedFromDate}
          mode="date"
          display="calendar"
          onChange={onChangeFromDate}
          onClose={() => setFromDatePicker(false)}
        />
      )}
    </View>

    {/* to date  */}
    <View style={{ marginTop:10 }}>
    <Text style={{ fontSize:15, fontWeight:'bold' }}>To Date</Text>
    <TouchableOpacity onPress={() => setToDatePicker(true)}>
<View>
    
<Text style={{ backgroundColor:'grey', textAlign:'center', fontSize:20 }}>  {selectedToDate.toLocaleDateString()}</Text>

</View>
      </TouchableOpacity>
      {toDatePicker && (
        <DateTimePicker
        value={selectedToDate}
          mode="date"
          display="calendar"
          onChange={onChangeToDate}
          onClose={() => setToDatePicker(false)}
        />
      )}
    </View>
    <Button icon={icon} style={GlobalStyle.loginBtn} mode="contained-tonal" buttonColor={theme.colors.primary} labelStyle={{ color: '#fff' }} onPress={()=>{filterBtn()}} >
        {iconName}
    </Button>
   
    <SafeAreaView style={{
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    }}>
         <ScrollView contentContainerStyle={{ padding: 40, marginTop: -50, }} >
         {showLoading ? 
           <ActivityIndicator size="large" color={theme.colors.primary} showLoading style={{ display:'flex', flex: 1,
           justifyContent: 'center',
       alignContent:'center',alignItems:'center',alignSelf:'center',flexGrow:1,
           }}/>
         :
    <View>{sale_list()}</View>
        }
     
         </ScrollView>

    </SafeAreaView>

</Surface>
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