import CustomerListComponent from "../../../component/CustomerListComponent";

export default function EditCustomerScreen({history}){
  return (
    <>
    <CustomerListComponent title="Edit Customer" buttonName="pen" history={history} />
    </>
  );
}