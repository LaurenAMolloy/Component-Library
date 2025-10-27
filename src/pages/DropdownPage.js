import { useState } from 'react';
import DropDown from '../components/Dropdown';

function DropDownPage() {
  const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option)
  }

  const options = [
    {label : 'Red', value: 'red'},
    {label : 'Green', value: 'green'},
    {label : 'Blue', value: 'blue'}
  ]

  return (
    <>
    <DropDown className = "flex" 
      options={options} 
      value={selection} 
      onChange={handleSelect} 
    />
    </>
  ) 
}

export default DropDownPage;
