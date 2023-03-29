import axios from "axios";
import API_Endpoint from "../URL";
const List_Customer=async(nameOnly,customerID,setCustomerList,screenName,setShowLoading)=>{
    setShowLoading(true);
        if(screenName==="Customer Screen"){
            await axios.get(API_Endpoint.URL+'customer?Name_Only='+false+'&Customer_ID='+customerID+'&Business_Name='+API_Endpoint.Business_Name)
        .then((res)=>{
            // console.log("res",res.data); //return array 
            if(res.status===200){
                res.data.map(({Customer_ID,Customer_Name,Customer_Phone_Number,Customer_Shop_Name,Customer_Shop_Address,Customer_CLV})=>{
                    setCustomerList(customer=>[...customer,{Customer_ID,Customer_Name,Customer_Phone_Number,Customer_Shop_Name,Customer_Shop_Address,Customer_CLV}])
                })
               //false 
               setShowLoading(false);
            }
        }).catch((err)=>{
            setCustomerList(err.response.data);
        })
        }else {
            await axios.get(API_Endpoint.URL+'customer?Name_Only='+false+'&Customer_ID='+customerID+'&Business_Name='+API_Endpoint.Business_Name)
            .then((res)=>{
                if(res.status===200){
                    res.data.map(({Customer_ID,Customer_Name})=>{
                        setCustomerList(customer=>[...customer,{customerID:Customer_ID,customerName:Customer_Name}]);
                    })
                    setShowLoading(false);
                }
            }).catch((err)=>{
                alert(err);
            })
        }
        
}
export default List_Customer;