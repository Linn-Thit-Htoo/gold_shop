import axios from 'axios';
import API_Endpoint from '../URL';
const List_Debit = async(debitID,debitType,setShowLoading,setDebitList) => {
    setShowLoading(true);
    await axios.get(API_Endpoint.URL+'debit?ID='+debitID+'&Debit_Type='+debitType+'&Business_Name=NKGoldShop')
    .then((res)=>{
        if(res.status===200){
            if(debitType==="Customer"){
                res.data.map(({Sale_ID,Customer_ID,Gold_Price,Kyat_Weight,Pae_Weight,Yway_Weight,Total_Amount,Receive_Amount})=>{
                    setDebitList(customerDebit=>[...customerDebit,{Sale_ID,Customer_ID,Gold_Price,Kyat_Weight,Pae_Weight,Yway_Weight,Total_Amount,Receive_Amount}])
              });
              setShowLoading(false);
            }else {
                res.data.map(({Buy_ID,Supplier_ID,Gold_Price,Kyat_Weight,Pae_Weight,Yway_Weight,Total_Amount,Pay_Amount})=>{
                    setDebitList(supplierDebit=>[...supplierDebit,{Buy_ID,Supplier_ID,Gold_Price,Kyat_Weight,Pae_Weight,Yway_Weight,Total_Amount,Pay_Amount}])
              });
              setShowLoading(false);
            }
        }
    }).catch((err)=>{
        console.log(err);
    })
}
export default List_Debit;