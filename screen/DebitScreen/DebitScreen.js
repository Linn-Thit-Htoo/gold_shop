import {useState,useEffect} from 'react';
import { SafeAreaView, StyleSheet, BackHandler, View, Image, Alert,TouchableOpacity,FlatList  } from 'react-native';
import customerIcon from '../../assets/icons/customer.png';
import AppBarComponent from '../../component/AppBarComponent';
import CustomerStyle from '../../style/CustomerStyle';
import { Surface, Text, Checkbox, Switch,Button,Card } from 'react-native-paper';
import theme from '../../theme/theme';
import shopBag from "../../assets/icons/shopping-bag.png";
import editIcon from '../../assets/icons/edit.png'
import FooterComponent from '../../component/FooterComponent';
import List_Debit from '../../api/Debit/GetDebitController';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import GlobalStyle from '../../style/GlobalStyle';
const DebitScreen = ({history}) => {
  const [value, setValue] = useState('');
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const pressCheck = () => {
    Alert.alert(
        "Warning",
        "Are you sure this customer has given all his debit",
        [
            {
                text: "Cancel",
                // onPress: () => setChecked(checked),
                style: "cancel",

            },
            { text: "OK", }
        ]
    );
}

  BackHandler.addEventListener('hardwareBackPress', function () {
    history.push('/main');
    return true;
  });
  return (
    <>
      <AppBarComponent title="Debit Management" />
      
      
      <View style={{display:'flex',justifyContent:'center',height:'60%',flex:1,}}>
<View style={{ flexDirection: 'row' }}>
        <Card style={GlobalStyle.card} onPress={()=>history.push('/debit/customer')}>
        <Image source={customerIcon} style={GlobalStyle.icon} />
          <Text style={GlobalStyle.iconText}>
            Customer 
          </Text>
        </Card>
        <Card style={GlobalStyle.card} onPress={()=>history.push('/debit/supplier')}>
          <Image source={shopBag} style={GlobalStyle.icon} />
          <Text style={GlobalStyle.iconText}>
             Supplier
          </Text>
        </Card>
      </View>
</View>


      
      <FooterComponent />
      


    </>
  );
};



export default DebitScreen;