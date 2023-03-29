import React from 'react';
import { TextInput, Surface, Button } from 'react-native-paper'
import { View,BackHandler,Text,Image,KeyboardAvoidingView,Platform,SafeAreaView } from 'react-native';
import GlobalStyle from '../../style/GlobalStyle';
import theme from '../../theme/theme';
import DropdownComponent from '../../component/DropdownComponent';
import AppBarComponent from '../../component/AppBarComponent';
import  { useState } from 'react';
import FooterComponent from '../../component/FooterComponent';
import changePassword from "../../assets/icons/changePassword.png"
import key from "../../assets/icons/password.png";
import CustomerStyle from '../../style/CustomerStyle';
export default function ChangePasswordScreen({history}){    
  const [disabledInputData,setDisabledInputData]=useState(true);
  const [oldPassword,setOldPassword]=useState("");
  const [newPassword,setNewPassword]=useState("");
  const [confirmPassword,setConfirmPassword]=useState("");
    BackHandler.addEventListener('hardwareBackPress', function () {
      history.push('/main');
      return true;
  });
const postBody = {
  User_ID:1,
  Old_Password:oldPassword,
  New_Password:newPassword,
  Update_By:"NK",
  Business_Name:"NKGoldShop"
}

      return (
        <>
         <SafeAreaView>
        <KeyboardAvoidingView
        behavior={Platform.OS === "android" ? "padding" : "height"} >
           
   <AppBarComponent title="Change Password" disabledInputData={disabledInputData} postBody={postBody} />
   
        
        <Surface style={CustomerStyle.editProfileSurface}>
             {/* {renderLabel()} */}
          <Image source={changePassword} style={GlobalStyle.icon} />
          <TextInput
         label="Old Password"
         keyboardType="number-pad"
         style={GlobalStyle.textInput}
         mode="outlined"
         theme={{ colors: { primary: theme.colors.secondary } }}
         onChangeText={value => [setOldPassword(value),value==="" || newPassword==="" || confirmPassword==="" ? setDisabledInputData(true):setDisabledInputData(false)]}
         placeholderTextColor={theme.colors.primary}
         selectionColor={theme.colors.primary}
         right={<TextInput.Icon icon={key} style={GlobalStyle.textInputIcon} iconColor={theme.colors.primary} />}
     />
     
     <TextInput
         label="New Password"
         keyboardType="number-pad"
         style={GlobalStyle.textInput}
         mode="outlined"
         theme={{ colors: { primary: theme.colors.secondary } }}
         onChangeText={value => [setNewPassword(value),value==="" || oldPassword==="" || confirmPassword==="" ? setDisabledInputData(true):setDisabledInputData(false)]}
         placeholderTextColor={theme.colors.primary}
         selectionColor={theme.colors.primary}
         right={<TextInput.Icon icon={key} style={GlobalStyle.textInputIcon} iconColor={theme.colors.primary} />}
     />
       <TextInput
         label="Confirm Password"
         keyboardType="number-pad"
         style={GlobalStyle.textInput}
         mode="outlined"
         theme={{ colors: { primary: theme.colors.secondary } }}
         onChangeText={value => [setConfirmPassword(value),value==="" || oldPassword==="" || newPassword==="" ? setDisabledInputData(true):setDisabledInputData(false)]}
         placeholderTextColor={theme.colors.primary}
         selectionColor={theme.colors.primary}
         right={<TextInput.Icon icon={key} style={GlobalStyle.textInputIcon} iconColor={theme.colors.primary} />}
     />
            
       




  </Surface>


    
        </KeyboardAvoidingView>
        </SafeAreaView>
          <FooterComponent/>
        </>
        );
  
    }







