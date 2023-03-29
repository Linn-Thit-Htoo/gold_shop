import axios from "axios";
import API_Endpoint from "../URL";
const List_Supplier=async(nameOnly,supplierID,setSupplierList,screenName,setShowLoading)=>{
    setShowLoading(true);
       if(screenName==="Supplier Screen"){
        await axios.get(API_Endpoint.URL+'supplier?Name_Only='+false+'&Supplier_ID='+supplierID+'&Business_Name='+API_Endpoint.Business_Name)
        .then((res)=>{
            // console.log("res",res.data); //return array 
            if(res.status===200){
                res.data.map(({Supplier_ID,Supplier_Name,Supplier_Phone_Number,Supplier_Address})=>{
                    setSupplierList(supplier=>[...supplier,{Supplier_ID,Supplier_Name,Supplier_Phone_Number,Supplier_Address}])
                })
               //false 
               setShowLoading(false);
            }
        }).catch((err)=>{
            setSupplierList(err.response.data);
        })
       }else {
           setShowLoading(true);
        await axios.get(API_Endpoint.URL+'supplier?Name_Only='+false+'&Supplier_ID='+supplierID+'&Business_Name='+API_Endpoint.Business_Name)
        .then((res)=>{
            // console.log("res",res.data); //return array 
            if(res.status===200){
                res.data.map(({Supplier_ID,Supplier_Name})=>{
                    // setSupplierList(supplier=>[...supplier,{label:Supplier_Name,value:Supplier_ID}])
                    // setSupplierList(supplier=>[...supplier,[Supplier_ID,Supplier_Name]])
                    setSupplierList(supplier => [...supplier, {supplierID:Supplier_ID,supplierName:Supplier_Name}]);
                    
                   
               
                });
               //false            
               setShowLoading(false);
             
            }
        }).catch((err)=>{
            setSupplierList(err.response.data);
        })
       }
        
}
export default List_Supplier;


// 