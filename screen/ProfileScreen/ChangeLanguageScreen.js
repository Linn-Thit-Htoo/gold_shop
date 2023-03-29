import {useState} from "react";
import { View,Text } from 'react-native';
import { RadioButton,CheckBox,Surface } from 'react-native-paper';
import AppBarComponent from "../../component/AppBarComponent";
import CustomerStyle from "../../style/CustomerStyle";
import theme from "../../theme/theme";
export default function ChangeLanguageScreen(){
  const [checked, setChecked] =useState('first');
  

    return (
        <>
  <AppBarComponent title="Change Language"/>
  <Surface elevation={4} style={{ backgroundColor:'#fff',
        borderRadius:10,height: 90,alignItems:'center',justifyContent:'center',marginTop:10}} >

  <View style={{display:'flex',flex:1,flexDirection:'row',flexGrow:1,alignItems:'center',justifyContent:'center'}}>
  <Text style={{justifyContent:'flex-start'}}>EN</Text>
     <RadioButton
        value="en"
        status={ checked === 'en' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('en')}
        theme={theme}
      />
     <Text style={{justifyContent:'flex-start'}}>မြန်မာ</Text>
      <RadioButton
        value="mm"
        status={ checked === 'mm' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('mm')}
        theme={theme}
      />
   
    </View>
         
        </Surface>
  



      
        </>
    );
}