import React, { useEffect, useState } from 'react';
import {Avatar, Card, IconButton,Surface } from 'react-native-paper';
import {View,Text,Image,ActivityIndicator} from "react-native";
import AppBarComponent from '../../component/AppBarComponent';
import CustomerStyle from '../../style/CustomerStyle';
import customerIcon from '../../assets/icons/customer.png';
import shopBag from "../../assets/icons/shopping-bag.png";
import debitIcon from "../../assets/icons/debit.png";
import coinIcon from "../../assets/icons/coin.png";
import FooterComponent from '../../component/FooterComponent';
import Get_Dashboard from '../../api/Dashboard/GetDashboardController';
export default function DashboardScreen({history}){
  const [dashboardList,setDashboardList] = useState([]);
  const [showLoading,setShowLoading] = useState(false);
  useEffect(()=>{
    Get_Dashboard(setDashboardList,setShowLoading);
  },[])
    return (
        <>
        <AppBarComponent title="Dashboard" />
{
  dashboardList[0] ? 
  <>
   <View style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:10}}>
        <Surface elevation={4} style={CustomerStyle.surfaceList}>
          <Image source={customerIcon} style={{width:30,height:30,position:'absolute',left:20}}/>      
          <Text style={CustomerStyle.info}>Customers</Text>
          <Text style={CustomerStyle.info}> {dashboardList[0].Customers} </Text>
          
        </Surface>
      </View>
      <View style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:10}}>
        <Surface elevation={4} style={CustomerStyle.surfaceList}>
          <Image source={shopBag} style={{width:30,height:30,position:'absolute',left:20}}/>      
          <Text style={CustomerStyle.info}>Suppliers</Text>
          <Text style={CustomerStyle.info}> {dashboardList[0].Suppliers} </Text>
          
        </Surface>
      </View>
      <View style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:10}}>
        <Surface elevation={4} style={CustomerStyle.surfaceList}>
          <Image source={debitIcon} style={{width:30,height:30,position:'absolute',left:20}}/>      
          <Text style={CustomerStyle.info}>Pay Debit Amount</Text>
          <Text style={CustomerStyle.info}> {dashboardList[0].Pay_Debit_Amount} </Text>
          
        </Surface>
      </View>
      <View style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:10}}>
        <Surface elevation={4} style={CustomerStyle.surfaceList}>
          <Image source={debitIcon} style={{width:30,height:30,position:'absolute',left:20}}/>      
          <Text style={CustomerStyle.info}>Get Debit Amount</Text>
          <Text style={CustomerStyle.info}> {dashboardList[0].Get_Debit_Amount} </Text>
          
        </Surface>
      </View>
      <View style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:10}}>
        <Surface elevation={4} style={CustomerStyle.surfaceList}>
          <Image source={coinIcon} style={{width:30,height:30,position:'absolute',left:20}}/>      
          <Text style={CustomerStyle.info}>Sell Amount</Text>
          <Text style={CustomerStyle.info}> {dashboardList[0].Sell_Amount} </Text>
          
        </Surface>
      </View>
      <View style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:10}}>
        <Surface elevation={4} style={CustomerStyle.surfaceList}>
          <Image source={coinIcon} style={{width:30,height:30,position:'absolute',left:20}}/>      
          <Text style={CustomerStyle.info}>Buy Amount</Text>
          <Text style={CustomerStyle.info}> {dashboardList[0].Buy_Amount} </Text>
          
        </Surface>
      </View>
  </>
  : 
  <ActivityIndicator />
}
      <FooterComponent />
        </>
    );
}