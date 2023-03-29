import BuyListComponent from "../../component/BuyListComponent";
import FooterComponent from "../../component/FooterComponent";
import SaleListComponent from "../../component/SaleListComponent"


export default function EditSalEditBuyScreeneScreen({history}){
  return (
      <>
        <BuyListComponent title="Edit Buy"  icon="filter" iconName="Filter" buttonName="pen" history={history}/>
      </>
  );
    
}