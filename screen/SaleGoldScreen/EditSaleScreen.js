import FooterComponent from "../../component/FooterComponent";
import SaleListComponent from "../../component/SaleListComponent";
import SaleScreenComponent from "../../component/SaleScreenComponent";

export default function EditSaleScreen({history}){
  return (
      <>
        <SaleListComponent title="Edit Sale"  icon="filter" iconName="Filter" buttonName="pen" history={history}/>
        <FooterComponent/>
      </>
  );
    
}