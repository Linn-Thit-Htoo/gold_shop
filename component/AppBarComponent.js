import React, {useState} from 'react';
import  {Appbar, Title, Snackbar}  from 'react-native-paper';
import { useHistory } from 'react-router-dom';
import Create_Customer from '../api/Customer/CreateCustomerController';
import Update_Customer from '../api/Customer/UpdateCustomerController';
import theme from '../theme/theme';
import {ActivityIndicator} from 'react-native';
import Create_Supplier from '../api/Supplier/CreateSupplierController';
import Update_Supplier from '../api/Supplier/UpdateSupplierController';
import Create_Buy from '../api/Buy/CreateBuyController';
import Update_Buy from '../api/Buy/UpdateBuyController';
import Create_Sale from '../api/Sale/CreateSaleController';
import Update_Sale from '../api/Sale/UpdateSaleController';
import Change_Password from '../api/Account/ChangePasswordController';
import Update_Profile from '../api/Account/UpdateProfileController';

export default function AppBarComponent({title,postBody,disabledInputData}){
  const history=useHistory();
  const [visible, setVisible] = useState(false);
  const onToggleSnackBar = () => setVisible(!visible);
  const onDismissSnackBar = () => setVisible(false);
  const [respMessage,setRespMessage] = useState("");
  const [showLoading,setShowLoading]=useState(false);
  const  routeFunc=()=>{
  if(title==="Dashboard" ||title==="Data Management" || title==="Create Sale Screen" || title==="Buy Gold Screen" || title==="Debit Management" || title==="Profile Setting" || title==="Sale Management" || title==="Buy Management"){
    history.push("/main");
  }else if(title==="Customer Management" || title==="Supplier Management"){
    history.push('/data');
  }else if(title==="Create Customer" || title==="Customer List" || title==="Edit Customer" || title==="Delete Customer"){
    history.push('/customer');
  }else if(title==="Create Supplier" || title==="Supplier List" || title==="Edit Supplier" || title==="Delete Supplier"){
    history.push('/supplier');
  }
  else if(title==="Account Information" || title==="Profile Edit" || title==="Change Password" || title==="Change Language"){
    history.push("/profile/setting")
  }
  else if(title==="Sale List" || title==="Edit Sale" || title==="Delete Sale" || title==="Create Sale"){
    history.push("/sale/management");
  }
  else if(title==="Create Buy" || title==="Buy List" || title==="Edit Buy" | title==="Delete Buy"){
    history.push("/buy/management")
  }else if(title==="Update Customer"){
    history.push('/customer/edit');
  }else if(title==="Update Supplier"){
    history.push('/supplier/edit');
  }else if (title==="Update Buy"){
    history.push('/buy/edit');
  }else if(title==="Update Sale"){
    history.push('/sale/edit');
  }else if(title==="Customer Debit" || title==="Supplier Debit"){
    history.push('/debit');
  }

 
  }
  const callAPI = (postBody) =>{
    title==="Create Supplier" && Create_Supplier(postBody,setRespMessage);
    title==="Create Customer" &&  Create_Customer(postBody,setRespMessage);

    title === "Update Customer" && Update_Customer(postBody,setRespMessage);
    title==="Update Supplier" && Update_Supplier(postBody,setRespMessage);
    title==="Create Buy" && Create_Buy(postBody,setRespMessage);
    title==="Create Sale" && Create_Sale(postBody,setRespMessage);
    title==="Update Buy" && Update_Buy(postBody,setRespMessage);
    title==="Update Sale" && Update_Sale(postBody,setRespMessage);
    title==="Update Customer" && customerEditPage();
    title==="Update Supplier" && supplierEditPage();
    title==="Update Buy" && buyEditPage();
    title==="Change Password" && Change_Password(postBody,setRespMessage);
    title==="Profile Edit" && Update_Profile(postBody,setRespMessage);
  }
  const customerEditPage = () =>{
    setTimeout(() => {
      history.push("/customer/edit");
    }, 1000); //milli sec
  }
  const supplierEditPage = () => {
    setTimeout(()=>{
      history.push('/supplier/edit');
    },1000);
  }
  const buyEditPage = () =>{
    setTimeout(()=>{
      history.push('/buy/edit');
    },1000);
  }
  const saleEditPage = () => {
    setTimeout(()=>{
      history.push('/sale/edit');
    },1000);
  }
return (
 <>
  <Appbar.Header style={{backgroundColor:theme.colors.primary}}>
  <Appbar.BackAction  onPress={()=>routeFunc()} color="#fff"/>
  <Appbar.Content title={title} color="#fff"/>
 { title==="Create Sale" || title==="Create Buy"  || title==="Create Customer" || title==="Update Customer" || title==="Update Supplier" ||title==="Create Supplier" ||  title==="Profile Edit" || title==="Change Password" || title==="Update Buy" || title==="Update Sale" ? <Appbar.Action icon="content-save-all" onPress={() => [callAPI(postBody),onToggleSnackBar()]} color="#fff" disabled={disabledInputData}/> : null}
</Appbar.Header>
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


    
 </>
);
}

