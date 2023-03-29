import DropDownPicker from 'react-native-dropdown-picker';
export default function DropdownComponent({open,value,items,setOpen,setValue,setItems,placeholder}){
    return (
        <>
    <DropDownPicker
    open={open}
    value={value}
    items={items}
    setOpen={setOpen}
    setValue={setValue}
    setItems={setItems}
    style={{width:'93%',marginLeft:'0%',marginTop:'10%'}}
    // style={{paddingHorizontal:20}}L
    placeholder={placeholder}
  />        
        </>
    )
}