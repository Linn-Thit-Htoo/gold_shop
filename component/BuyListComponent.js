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
import buy from "../assets/icons/buy.png";
import FooterComponent from "./FooterComponent";
import SelectDropdown from 'react-native-select-dropdown';
import List_Supplier from "../api/Supplier/ListSupplierController";
import List_Buy from "../api/Buy/ListBuyController";
import Delete_Buy from "../api/Buy/DeleteBuyController";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function BuyListComponent({ history, icon, title, iconName,buttonName }) {
  // deleted buy id
  const [deletedID,setdeletedID] = useState();
  // for deleted successfully message 
  const [deletedMsg,setDeletedMsg] = useState("");

  const [visible, setVisible] = useState(false);
  const onDismissSnackBar = () => setVisible(false);
  //for show loading 
  const [showLoading,setShowLoading]=useState(false);
    const deleteBtn = (buyID) => {
       deletePressed(buyID);
    }
    const deletePressed = (buyID) => {
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
                setdeletedID(buyID);
                Delete_Buy(buyID,setShowLoading,setDeletedMsg);
              }
            }
        ]
    );
    }
    // FOR EDIT 
    const editBtn = (Buy_ID,Supplier_ID,Price,Total_Amount,Receive_Amount,Create_Date,Kyat_Weight,Pae_Weight,Yway_Weight) => {
      try {
        AsyncStorage.setItem('buyID',JSON.stringify(Buy_ID));
        AsyncStorage.setItem('supplierID',JSON.stringify(Supplier_ID));
        AsyncStorage.setItem('price',JSON.stringify(Price));
        AsyncStorage.setItem('totalAmount',JSON.stringify(Total_Amount));
        AsyncStorage.setItem('receiveAmount',JSON.stringify(Receive_Amount));
        // AsyncStorage.setItem("createDate",Create_Date);
        const formattedDate = Create_Date.split("T")[0];
        AsyncStorage.setItem('createDate',formattedDate);
        AsyncStorage.setItem('kyatWeight',Kyat_Weight);
        AsyncStorage.setItem('paeWeight',Pae_Weight);
        AsyncStorage.setItem('ywayWeight',Yway_Weight);
        history.push('/buy/update');
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
    const [supplierList, setSupplierList] = useState([{ supplierID: "%", supplierName: "All" }]);
    //FOR DATE PICKER 
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);
    // FORMATTED CREATE DATE 
    const [formattedCreateDate,setFormattedCreateDate]=useState();
    // DROPDOWN SELECTED DATA 
    const [selectedSupplierID, setSelectedSupplierID] = useState();
    var today=moment().format('YYYY-MM-DD');
    // FOR BUY LIST
    const [buyList,setBuyList]=useState([]);
    useEffect(() => {

        List_Supplier(false, '%', setSupplierList,"Buy Screen",setShowLoading);
        List_Buy('%',setBuyList,today,today,setShowLoading);
      }, []);
     
    const filterBtn = () =>{
      //  console.log("id",selectedSupplierID)
       const formattedFromDate = selectedFromDate.toISOString().split("T")[0];
       const formattedToDate = selectedToDate.toISOString().split("T")[0];
      //  console.log("from date",formattedFromDate);
      //  console.log("to date",formattedToDate);
        if(!selectedSupplierID){
            List_Buy('%',setBuyList,today,today,setShowLoading);
          }else if(selectedSupplierID=='%'){
            List_Buy('%',setBuyList,today,today,setShowLoading);
          }
          else {
            List_Buy(selectedSupplierID, setBuyList, formattedFromDate, formattedToDate, setShowLoading);
          }
    }
    
    const buy_list = () =>{
     return  buyList.map(({Buy_ID,Supplier_ID,Price,Total_Amount,Receive_Amount,Create_Date,Kyat_Weight,Pae_Weight,Yway_Weight})=>{
         return (
             <>
             
                 {/* <SafeAreaView style={{
                    flex: 1,
                    paddingTop: StatusBar.currentHeight,
                }}>
                    <ScrollView contentContainerStyle={{ padding: 40, marginTop: -50, }} > */}
                        {
                          Buy_ID !== deletedID &&
                          <View style={CustomerStyle.saleListView}>
                          <Surface elevation={4} style={CustomerStyle.surfaceList}>
                              <Image source={buy} style={{ width: 30, height: 30, position: 'absolute', left: 20 }} />
                              <Text style={CustomerStyle.info}>Price: {Price} MMK</Text>
                              <Text style={CustomerStyle.info}>Total: {Total_Amount} MMK</Text>
                              <View style={{ alignSelf: 'flex-end', position: 'absolute', marginRight:5 }}>
                                  <Button icon={buttonName}
                                  labelStyle={{fontSize:24}}
                                     theme={theme}
                                      onPress={() => {
                                         buttonName==="delete" ? deleteBtn(Buy_ID) : editBtn(Buy_ID,Supplier_ID,Price,Total_Amount,Receive_Amount,Create_Date,Kyat_Weight,Pae_Weight,Yway_Weight);
                                          
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
    <Image source={buy} style={GlobalStyle.logoIcon} />
    <View style={{
        marginTop: 35,
    }}>
      {showLoading ? <ActivityIndicator /> :
      <SelectDropdown
data={supplierList}
defaultButtonText="All"
onSelect={(selectedItem, index) => {
setSelectedSupplierID(selectedItem.supplierID);
const formattedDate = moment(selectedItem.Create_Date).format('YYYY-MM-DD');
setFormattedCreateDate(formattedDate);
}}
buttonTextAfterSelection={(selectedItem, index) => {
return selectedItem.supplierName;
}}
rowTextForSelection={(item) => {
return item.supplierName;
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
    <View>{buy_list()}</View>
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