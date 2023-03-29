import { Linking,View } from "react-native";
import { Text } from "react-native-paper";
export default function FooterComponent(){
    return(
        <View style={{position:'absolute',bottom:10,display:'flex',alignItems:'center',justifyContent:'center',alignSelf:'center',textAlign:'center',alignContent:'center'}}>
        <Text variant="labelLarge">Powered By : <Text style={{color:'#0B0B45',fontWeight:'bold'}}  onPress={() => Linking.openURL('fb://page/102583102028904')}>NK Software House.</Text></Text>
        </View>
    )
}