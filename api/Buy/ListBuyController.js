import axios from "axios";
import API_Endpoint from "../URL";
const List_Buy = async(supplierID,setBuyList,fromDate,toDate,setShowLoading) => {
    setShowLoading(true);
   await axios.get(API_Endpoint.URL+'buy?Supplier_ID='+supplierID+'&From_Date='+fromDate+'&To_Date='+toDate+'&Business_Name=NKGoldShop')
   .then((res)=>{
       
    if(res.status===200){
      // console.log("res data for buy update",res.data);
        // console.log("res for each",res.data);
        // res.data.map(({Buy_ID,Supplier_ID,Price,Total_Amount,Receive_Amount})=>{
        //     setBuyList(buy=>[...buy,{Buy_ID,Supplier_ID,Price,Total_Amount,Receive_Amount}])
            
        // })
        res.data.map(({ Buy_ID, Supplier_ID, Price, Total_Amount, Receive_Amount,Create_Date,Kyat_Weight,Pae_Weight,Yway_Weight }) => {
            setBuyList(buy => [...buy, { Buy_ID, Supplier_ID, Price, Total_Amount, Receive_Amount,Create_Date,Kyat_Weight,Pae_Weight,Yway_Weight }]);
          });
        setShowLoading(false);
    }

   }).catch((err)=>{
    alert(err);
   });
}
export default List_Buy;