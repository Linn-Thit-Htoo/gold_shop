import axios from "axios";
import API_Endpoint from "../URL";
import List_Customer from "./ListCustomerController";

const Delete_Customer =async(customerID,setShowLoading)=>{
    setShowLoading(true);
        await axios.delete(API_Endpoint.URL+'customer?Customer_ID='+customerID+'&Update_By=NK'+'&Business_Name='+API_Endpoint.Business_Name).then((res)=>{
        if(res.status===202){
            setShowLoading(false);
        //    history.goBack();
       
        }
       
    }).catch((err)=>{
      alert(err.response.data);
    })
}
export default Delete_Customer;