import { StatusBar } from 'expo-status-bar';
import {  Text, View } from 'react-native';
import { NativeRouter, Route, Switch } from "react-router-native";
import theme from './theme/theme';
import GlobalStyle from './style/GlobalStyle';
//screen
import HomeScreen from './screen/HomeScreen';
import LoginScreen from './screen/LoginScreen';
import MainScreen from './screen/MainScreen';
import CreateCustomerScreen from './screen/DataScreen/Customer/CreateCustomerScreen';
import CustomerMgmtScreen from './screen/DataScreen/Customer/CustomerMgmtScreen';
import EditCustomerScreen from './screen/DataScreen/Customer/EditCustomerScreen';
import DeleteCustomerScreen from './screen/DataScreen/Customer/DeleteCustomerScreen';
import CustomerListScreen from './screen/DataScreen/Customer/CustomerListScreen';
import DataManagementScreen from './screen/DataScreen/DataManagementScreen';
import SupplierManagement from './screen/DataScreen/Supplier/SupplierManagement';
import CreateSaleScreen from './screen/SaleGoldScreen/CreateSaleScreen';
import SupplierListScreen from './screen/DataScreen/Supplier/SupplierListScreen';
import CreateSupplierScreen from './screen/DataScreen/Supplier/CreateSupplierScreen';
import EditSupplierScreen from './screen/DataScreen/Supplier/EditSupplierScreen';
import DeleteSupplierScreen from './screen/DataScreen/Supplier/DeleteSupplierScreen';
import DebitScreen from './screen/DebitScreen/DebitScreen';
import CreateBuyScreen from './screen/BuyGoldScreen/CreateBuyScreen';
import ProfileSetting from "./screen/ProfileScreen/ProfileSetting";
import ProfileEditScreen from "./screen/ProfileScreen/ProfileEditScreen";
import ChangePasswordScreen from './screen/ProfileScreen/ChangePasswordScreen';
import SaleManagementScreen from './screen/SaleGoldScreen/SaleManagementScreen';
import SaleListScreen from './screen/SaleGoldScreen/SaleListScreen';
import EditSaleScreen from './screen/SaleGoldScreen/EditSaleScreen';
import BuyManagementScreen from './screen/BuyGoldScreen/BuyManagementScreen';
import EditBuyScreen from './screen/BuyGoldScreen/EditBuyScreen';
import BuyListScreen from './screen/BuyGoldScreen/BuyListScreen';
import DashboardScreen from './screen/Dashboard/DashboardScreen';
import SaleDeleteScreen from './screen/SaleGoldScreen/SaleDeleteScreen';
import DeleteBuyScreen from './screen/BuyGoldScreen/DeleteBuyScreen';
import ChangeLanguageScreen from './screen/ProfileScreen/ChangeLanguageScreen';
import UpdateCustomerScreen from './screen/DataScreen/Customer/UpdateCustomerScreen';
import UpdateSupplierScreen from './screen/DataScreen/Supplier/UpdateSupplierScreen';
import UpdateBuyScreen from './screen/BuyGoldScreen/UpdateBuyScreen';
import UpdateSaleScreen from './screen/SaleGoldScreen/UpdateSaleScreen';
import CustomerDebitScreen from './screen/DebitScreen/CustomerDebitScreen'; 
import SupplierDebitScreen from './screen/DebitScreen/SupplierDebitScreen';
export default function App() {
  return (
    <View style={{height:'100%'}}>
      <StatusBar style="light" backgroundColor={theme.colors.primary} />
      <NativeRouter>
        <Switch>
          <Route exact path="/" component={HomeScreen}></Route>
          <Route exact path="/login" component={LoginScreen}></Route>
          <Route exact path="/main" component={MainScreen}></Route>
          <Route exact path="/customer" component={CustomerMgmtScreen}></Route>
          <Route exact path="/customer/create" component={CreateCustomerScreen}></Route>
          <Route exact path="/customer/list" component={CustomerListScreen}></Route>
          <Route exact path="/customer/edit" component={EditCustomerScreen}></Route>
          <Route exact path="/customer/update" component={UpdateCustomerScreen}></Route>
          <Route exact path="/customer/delete" component={DeleteCustomerScreen}></Route>
          <Route exact path="/data" component={DataManagementScreen}></Route>
          <Route exact path="/supplier" component={SupplierManagement}></Route>
          <Route exact path="/sale/management" component={SaleManagementScreen}></Route>
          <Route exact path="/sale/list" component={SaleListScreen}></Route>
          <Route exact path="/supplier/list" component={SupplierListScreen}></Route>
          <Route exact path="/supplier/create" component={CreateSupplierScreen}></Route>
          <Route exact path="/supplier/edit" component={EditSupplierScreen}></Route>
          <Route exact path="/supplier/delete" component={DeleteSupplierScreen}></Route>
          <Route exact path="/supplier/update" component={UpdateSupplierScreen}></Route>
          <Route exact path="/debit" component={DebitScreen}></Route>
          <Route exact path="/buy/create" component={CreateBuyScreen}></Route>
          <Route exact path="/profile/setting" component={ProfileSetting}></Route>
          <Route exact path="/profile/edit" component={ProfileEditScreen}></Route>
          <Route exact path="/profile/changePassword" component={ChangePasswordScreen}></Route>
          <Route exact path="/sale/create" component={CreateSaleScreen}></Route>
          <Route exact path="/sale/edit" component={EditSaleScreen}></Route>
          <Route exact path="/buy/management" component={BuyManagementScreen}></Route>
          <Route exact path="/buy/edit" component={EditBuyScreen}></Route>
          <Route exact path="/buy/list" component={BuyListScreen}></Route>
          <Route exact path="/dashboard" component={DashboardScreen}></Route>
          <Route exact path="/sale/delete" component={SaleDeleteScreen}></Route>
          <Route exact path="/buy/delete" component={DeleteBuyScreen}></Route>
          <Route exact path="/buy/update" component={UpdateBuyScreen}></Route>
          <Route exact path="/profile/changeLanguage" component={ChangeLanguageScreen}></Route>
          <Route exact path="/sale/update" component={UpdateSaleScreen}></Route>
          <Route exact path="/debit/customer" component={CustomerDebitScreen}></Route>
          <Route exact path="/debit/supplier" component={SupplierDebitScreen}></Route>
        </Switch>
      </NativeRouter>
    </View>
  );
}


