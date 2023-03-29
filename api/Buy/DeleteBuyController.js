import axios from "axios";
import API_Endpoint from "../URL";

const Delete_Buy = async(buyID,setShowLoading,setDeletedMsg)=>{
    setShowLoading(true);
   await axios.delete(API_Endpoint.URL+'buy?Buy_ID='+buyID+'&Update_By=NK'+'&Business_Name=NKGoldShop')
    .then((res)=>{
if(res.status===202){
setShowLoading(false);
setDeletedMsg(res.data)
// console.log(res.data);
}
    }).catch((err)=>{
        alert(err);
    })
}
export default Delete_Buy;