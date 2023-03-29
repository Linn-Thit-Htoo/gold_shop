import { Surface, Text } from 'react-native-paper';
import shopBag from "../../../assets/icons/shopping-bag.png";
import AppBarComponent from '../../../component/AppBarComponent';
import CustomerStyle from '../../../style/CustomerStyle';
import {View,Image} from "react-native";
import GlobalStyle from '../../../style/GlobalStyle';
import customerIcon from '../../../assets/icons/customer.png';
import FooterComponent from '../../../component/FooterComponent';
import SupplierListComponent from '../../../component/SupplierListComponent';
export default function SupplierListScreen({history}){
    return(
        <>
         <SupplierListComponent title="Edit Supplier" />
        </>        
    )

}
