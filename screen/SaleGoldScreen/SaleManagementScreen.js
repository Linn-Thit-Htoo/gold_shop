import { Text } from "react-native-paper";
import { BackHandler, Image, View } from "react-native";
import { Card } from 'react-native-paper'
import MainStyle from "../../style/MainStyle";
import GlobalStyle from "../../style/GlobalStyle";
import createIcon from "../../assets/icons/create.png";
import listIcon from "../../assets/icons/list.png";
import editIcon from "../../assets/icons/edit.png";
import deleteIcon from "../../assets/icons/delete.png";
import FooterComponent from "../../component/FooterComponent";
import AppBarComponent from "../../component/AppBarComponent";
export default function SaleManagementScreen({ history }) {
  return (
    <>    
    <AppBarComponent title="Sale Management"/>
    {/* <Text style={MainStyle.businessName}>Ko Aung Gold Shop</Text>
    <Text style={MainStyle.greetingText}>Good Morning 👋</Text> */}
    <View style={{display:'flex',justifyContent:'center',height:'60%',flex:1,}}>
      <View style={{ flexDirection: 'row' }}>
       
        <Card style={GlobalStyle.card} onPress={()=>history.push("/sale/list")}>
          <Image source={listIcon} style={GlobalStyle.icon} />
          <Text style={GlobalStyle.iconText}>
            Sale List
          </Text>
        </Card>
        <Card style={GlobalStyle.card} onPress={()=>history.push("/sale/create")}>
          <Image source={createIcon} style={GlobalStyle.icon} />
          <Text style={GlobalStyle.iconText}>
            Sale Create
          </Text>
        </Card>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <Card style={GlobalStyle.card} onPress={()=>history.push("/sale/edit")}>
          <Image source={editIcon} style={GlobalStyle.icon} />
          <Text style={GlobalStyle.iconText}>
            Sale Edit
          </Text>
        </Card>
        <Card style={GlobalStyle.card} onPress={()=>history.push("/sale/delete")}>
          <Image source={deleteIcon} style={GlobalStyle.icon} />
          <Text style={GlobalStyle.iconText}>
            Sale Delete
          </Text>
        </Card>
      </View>
    </View>
    <FooterComponent />
    </>
  )
}