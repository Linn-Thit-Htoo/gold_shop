import React, { useEffect, useState } from 'react';
import { TextInput, Surface, Button } from 'react-native-paper'
import { View,BackHandler,Text,Image,KeyboardAvoidingView,Platform, SafeAreaView,ActivityIndicator } from 'react-native';
import GlobalStyle from '../../style/GlobalStyle';
import theme from '../../theme/theme';
import DropdownComponent from '../../component/DropdownComponent';
import AppBarComponent from '../../component/AppBarComponent';
import FooterComponent from '../../component/FooterComponent';
import edit from "../../assets/icons/edit.png"
import CustomerStyle from '../../style/CustomerStyle';
import AsyncStorage from "@react-native-async-storage/async-storage";
import API_Endpoint from '../../api/URL';
export default function ProfileEditScreen({history}){    
    const [disabledInputData,setDisabledInputData]=useState(true);
    const [phoneNumber,setPhoneNumber] = useState("");
    const [userName,setUserName] = useState("");
    const [userID,setUserID] = useState();
    const [showLoading,setShowLoading] = useState(false);
    BackHandler.addEventListener('hardwareBackPress', function () {
      history.push('/main');
      return true;
  });
// useEffect(()=>{
//     AsyncStorage.getItem('userID').then(userID=>{
//       setUserID(userID);
//     }).catch(err=>{console.log(err)});
//     AsyncStorage.getItem('userName').then(userName=>{
//       setUserName(userName);
//     }).catch(err=>{console.log(err)});
//     AsyncStorage.getItem('phoneNumber').then(phoneNumber=>{
//       setPhoneNumber(phoneNumber);
//     }).catch(err=>{console.log(err)});
// },[]);

//  testing 
useEffect(() => {
  const getData = async () => {
    try {
      const userID = await AsyncStorage.getItem('userID');
      setUserID(userID);

      const userName = await AsyncStorage.getItem('userName');
      setUserName(userName);

      const phoneNumber = await AsyncStorage.getItem('phoneNumber');
      setPhoneNumber(phoneNumber);

    } catch (error) {
      console.log(error);
    }
  };

  getData();
}, []);

useEffect(() => {
  if (phoneNumber && userName) {
    setDisabledInputData(false);
  } else {
    setDisabledInputData(true);
  }
}, [phoneNumber, userName]);
const postBody= {
    
        "User_ID":userID,
        "User_Name":userName,
        "Phone_Number":phoneNumber,
        "Update_By":"NK",
        "Business_Name":API_Endpoint.Business_Name
    
}
      return (
        <>
         <SafeAreaView>
        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}>
   <AppBarComponent title="Profile Edit" disabledInputData={disabledInputData} postBody={postBody} />
     
       <Surface style={CustomerStyle.editProfileSurface}>
             {/* {renderLabel()} */}
          <Image source={edit} style={GlobalStyle.icon} />
        
          <TextInput
          value={userName}
         keyboardType="default"
         style={GlobalStyle.textInput}
         mode="outlined"
         theme={{ colors: { primary: theme.colors.secondary } }}
         onChangeText={value=>[setUserName(value),value==="" || phoneNumber==="" ? setDisabledInputData(true) : setDisabledInputData(false)]}
         placeholderTextColor={theme.colors.primary}
         selectionColor={theme.colors.primary}
         right={<TextInput.Icon icon="store" style={GlobalStyle.textInputIcon} iconColor={theme.colors.primary} />}
     />
      <TextInput
                value={phoneNumber}
                 keyboardType="number-pad"
                 style={GlobalStyle.textInput}
                 mode="outlined"
                 theme={{ colors: { primary: theme.colors.secondary } }}
                 onChangeText={value => [setPhoneNumber(value),value==="" || userName==="" ? setDisabledInputData(true) : setDisabledInputData(false)]}
                 right={<TextInput.Icon icon="phone" style={GlobalStyle.textInputIcon} iconColor={theme.colors.primary} />}
             />
         
      
            
  
       

  </Surface>



 
        </KeyboardAvoidingView>
        
        </SafeAreaView>
        <FooterComponent/>
        </>
        );
  
    }







