import { Button } from "react-native-paper";
import theme from "../theme/theme";
import GlobalStyle from "../style/GlobalStyle";
const ButtonComponent = ({iconName,btnText}) => {
    <>
            <Button icon={iconName}  style={GlobalStyle.loginBtn} mode="contained-tonal" buttonColor={theme.colors.primary} labelStyle={{color:'#fff'}}>
        Login
    </Button>

    </>
    
}
export default ButtonComponent;