import axios from "axios";
import API_Endpoint from "../URL";
const Create_Sale = async(postBody,setRespMessage) => {
   await axios.post(API_Endpoint.URL+'sale',postBody)
    .then((res)=>{
        if(res.status===201){
            setRespMessage(res.data);
         }
    }).catch((err)=>{
        alert(err);
    });
}
export default Create_Sale;