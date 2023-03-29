import Image from "react-native";
import GlobalStyle from "../style/GlobalStyle";
import nk from "../assets/logo.png";
const LogoComponent =({logo})=>{
  <>
  <Image source={nk} style={GlobalStyle.logoIcon}/>
  </>
}
export default LogoComponent;