import { Text } from "react-native-paper";
import { BackHandler, Image, View } from "react-native";
import { Card } from 'react-native-paper'
import MainStyle from "../../../style/MainStyle";
import GlobalStyle from "../../../style/GlobalStyle";
import createIcon from "../../../assets/icons/create.png";
import listIcon from "../../../assets/icons/list.png";
import editIcon from "../../../assets/icons/edit.png";
import deleteIcon from "../../../assets/icons/delete.png";
import FooterComponent from "../../../component/FooterComponent";
import AppBarComponent from "../../../component/AppBarComponent";
export default function SupplierManagement({ history }) {
  return (
    <>    
    <AppBarComponent title="Supplier Management" key="cm"/>
    {/* <Text style={MainStyle.businessName}>Ko Aung Gold Shop</Text>
    <Text style={MainStyle.greetingText}>Good Morning 👋</Text> */}
    <View style={{display:'flex',justifyContent:'center',height:'60%',flex:1,}}>
      <View style={{ flexDirection: 'row' }}>
        <Card style={GlobalStyle.card} onPress={()=>history.push('/supplier/create')}>
          <Image source={createIcon} style={GlobalStyle.icon} />
          <Text style={GlobalStyle.iconText}>
          Supplier Create
          </Text>
        </Card>
        <Card style={GlobalStyle.card} onPress={() => history.push('/supplier/list')}>
          <Image source={listIcon} style={GlobalStyle.icon} />
          <Text style={GlobalStyle.iconText}>
          Supplier List
          </Text>
        </Card>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <Card style={GlobalStyle.card} onPress={()=>history.push('/supplier/edit')}>
          <Image source={editIcon} style={GlobalStyle.icon} />
          <Text style={GlobalStyle.iconText}>
          Supplier Edit
          </Text>
        </Card>
        <Card style={GlobalStyle.card} onPress={()=>history.push('/supplier/delete')}>
          <Image source={deleteIcon} style={GlobalStyle.icon} />
          <Text style={GlobalStyle.iconText}>
          Supplier Delete
          </Text>
        </Card>
      </View>
    </View>
    <FooterComponent />
    </>
  )
}