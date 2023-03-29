import axios from "axios";
import API_Endpoint from "../URL";
const Update_Supplier = async(postBody,setRespMessage)=>{
    await axios.put(API_Endpoint.URL+'supplier',postBody)
    .then((res)=>{
        if(res.status===202){
            setRespMessage(res.data);
        }
    }).catch((err)=>{
        alert(err);
    });
}
export default Update_Supplier;