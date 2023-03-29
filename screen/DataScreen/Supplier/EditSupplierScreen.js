import SupplierListComponent from "../../../component/SupplierListComponent";

export default function EditSupplierScreen({history}){
  return (
    <>
    <SupplierListComponent  buttonName="pen" title="Edit Supplier" history={history}/>
    </>
  );
}