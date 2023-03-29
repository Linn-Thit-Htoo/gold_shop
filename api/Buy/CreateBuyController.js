import axios from "axios";
import API_Endpoint from "../URL";
const Create_Buy = async(postBody,setRespMessage) => {
    await axios.post(API_Endpoint.URL+'buy',postBody)
    .then((res)=>{
        if(res.status===201){
            setRespMessage(res.data);
         }
    }).catch((err)=>{
        setRespMessage(err.response.data);
    });
}
export default Create_Buy;