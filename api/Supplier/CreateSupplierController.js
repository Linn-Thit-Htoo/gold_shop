import axios from "axios";
import API_Endpoint from "../URL";
const Create_Supplier=async(postBody,setRespMessage)=>{
    // console.log(postBody);
        await axios.post(API_Endpoint.URL+'supplier',postBody)
        .then((res)=>{
            if(res.status===201){
               setRespMessage(res.data);
            }
        }).catch((err)=>{
            setRespMessage(err.response.data);
        })
}
export default Create_Supplier;