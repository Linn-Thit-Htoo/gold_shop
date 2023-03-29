import axios from "axios";
import API_Endpoint from "../URL";
 const Change_Password = async(postBody,setRespMessage) => {
    await axios.put(API_Endpoint.URL+'account/password',postBody)
    .then((res)=>{
        if(res.status===202){
            setRespMessage(res.data);
        }
    }).catch((err)=>{
        console.log(err);
        setRespMessage(err.response.data);
    })
 }
 export default Change_Password;