import axios from "axios";
import API_Endpoint from "../URL";
const Delete_Sale = async(saleID,setShowLoading,setDeletedMsg) => {
    setShowLoading(true);
  await  axios.delete(API_Endpoint.URL+'sale?Sale_ID='+saleID+'&Business_Name=NKGoldShop')
    .then((res)=>{
if(res.status===202){
    setShowLoading(false);
    setDeletedMsg(res.data);
}
    }).catch((err)=>{
        alert(err);
    })
}

export default Delete_Sale;