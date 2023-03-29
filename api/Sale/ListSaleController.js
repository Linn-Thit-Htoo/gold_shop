import axios from "axios";
import API_Endpoint from "../URL";
const List_Sale = async(customerID,setSaleList,fromDate,toDate,setShowLoading) => {
setShowLoading(true);
    await axios.get(API_Endpoint.URL+'sale?Customer_ID='+customerID+'&From_Date='+fromDate+'&To_Date='+toDate+'&Business_Name=NKGoldShop')
.then((res)=>{
if(res.status===200){
    res.data.map(({Sale_ID,Customer_ID,Gold_Price,Kyat_Weight,Pae_Weight,Yway_Weight,Total_Amount,Receive_Amount,Customer_Name,Create_Date})=>{
        setSaleList(sale=>[...sale,{Sale_ID,Customer_ID,Gold_Price,Kyat_Weight,Pae_Weight,Yway_Weight,Total_Amount,Receive_Amount,Customer_Name,Create_Date}]);
        setShowLoading(false);
    })
}
setShowLoading(false);
}).catch((err)=>{
console.log(err);
})
}

export default List_Sale;