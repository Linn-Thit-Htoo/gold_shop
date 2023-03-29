import axios from "axios";
import API_Endpoint from "../URL";
import AsyncStorage from "@react-native-async-storage/async-storage";
const User_Login=async(postBody,setWarningText,history)=>{
       await axios.post(API_Endpoint.URL+'account/login',postBody)
       .then((res)=>{
           if(res.status===202){
                // AsyncStorage.setItem('userID',JSON.stringify(res.data[0].User_ID));
                // AsyncStorage.setItem('userID',res.data[0].User_ID);
                // AsyncStorage.setItem('userName',res.data[0].User_Name);
                // AsyncStorage.setItem('userOldPhoneNumber',res.data[0].Phone_Number);
                const userID = res.data[0].User_ID;
                const userName = res.data[0].User_Name;
                const userPhoneNumber = res.data[0].Phone_Number;
                AsyncStorage.setItem('userID', userID);
                // AsyncStorage.setItem('userID',userID);
                AsyncStorage.setItem('userName',userName);
                AsyncStorage.setItem('phoneNumber',userPhoneNumber);
            //    history.push("/main");
           }
       }).catch((err)=>{
        setWarningText(err.response.data);
       })
}
export default User_Login;