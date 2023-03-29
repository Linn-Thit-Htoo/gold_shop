import axios from "axios";
import API_Endpoint from "../URL";


const Delete_Supplier = async(supplierID,setShowLoading) => {
    setShowLoading(true);
  await  axios.delete(API_Endpoint.URL+'supplier?Supplier_ID='+supplierID+'&Update_By=NK'+'&Business_Name='+API_Endpoint.Business_Name)
    .then((res)=>{
      
        if(res.status===202){
           setShowLoading(false);
           
         
        }
    }).catch((err)=>{
        alert(err);
    });
}

export default Delete_Supplier;