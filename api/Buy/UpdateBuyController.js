import axios from "axios";
import API_Endpoint from "../URL";
const Update_Buy=async(postBody,setRespMessage)=>{
        await axios.put(API_Endpoint.URL+'buy',postBody)
        .then((res)=>{
            if(res.status===202){
               setRespMessage(res.data);
            
            }
          
        }).catch((err)=>{
            setRespMessage(err.response.data);
        })
}
export default Update_Buy;