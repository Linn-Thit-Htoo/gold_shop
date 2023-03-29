import axios from "axios"
import API_Endpoint from "../URL"
const Get_Dashboard = async(setDashboardList,setShowLoading) => {
    setShowLoading(true);
 await axios.get(API_Endpoint.URL+'dashboard?Business_Name='+API_Endpoint.Business_Name)
  .then((res)=>{
   if(res.status===200){
    //    res.data.map(({Customers,Suppliers,Pay_Debit_Amount,Get_Debit_Amount,Sell_Amount,Buy_Amount})=>{
    //        setDashboardList(dashboard=>[...dashboard,{Customers,Suppliers,Pay_Debit_Amount,Get_Debit_Amount,Sell_Amount,Buy_Amount}])
    //    });
    setDashboardList(res.data);
      setShowLoading(false);
   }
  })
}
export default Get_Dashboard;