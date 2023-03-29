import axios from "axios";
import API_Endpoint from "../URL";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Update_Profile = async(postBody,setRespMessage,) => {
    await axios.put(API_Endpoint.URL+'account/profile',postBody)
    .then((res)=>{
        if (res.status === 202) {
            AsyncStorage.setItem('userName',postBody.User_Name);
            AsyncStorage.setItem('phoneNumber',postBody.Phone_Number);
            setRespMessage(res.data);
          }
    }).catch((err)=>{
        console.log(err);
    })
}
export default Update_Profile;
