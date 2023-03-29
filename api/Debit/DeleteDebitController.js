import axios from "axios";
import API_Endpoint from "../URL";
const Delete_Debit = (id,debitType,setShowLoading,setDeletedMsg) => {
    setShowLoading(true);
    axios.delete(API_Endpoint.URL+'debit?ID='+id+'&Debit_Type='+debitType+'&Business_Name=NKGoldShop')
    .then((res)=>{
        setShowLoading(false);
        setDeletedMsg(res.data);
    }).catch((err)=>{
        console.log(err);
    })
}
export default Delete_Debit;