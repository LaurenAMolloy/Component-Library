import React from 'react'
import { useState } from 'react'
import { GoChevronDown } from 'react-icons/go';
import Panel from './Panel'

export default function DropDown({ options, value, onChange }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        //functional update
        setIsOpen((prev) => !prev);
    }

    const handleOptionClick = (option) => {
        //close drop down
        setIsOpen(false);
        //when a use clicks...
        //what option was clicked?
        onChange(option);
    }

    //map over options when user clicks
    const renderedOptions = options.map((option) => {
        return <div className="hover:bg-sky-100 rounded cursor-pointer p-1" onClick={() => handleOptionClick(option)} key={option.value}>
            {option.label}
        </div>
    });

    // let content = 'Select...'
    // if(selection) {
    //     content = selection.label;
    // }

  return (
    //Whenever a user clicks on this div toggle state
    //if isOpen === true display
    <div className="w-48 relative">
        <Panel className =" flex justify-bewteen items-center cursor-pointer border" onClick={handleClick}>
            {value?.label || 'Select...'}
            <GoChevronDown className="text-lg" />
        </Panel>
        {isOpen && 
        <Panel className="absolute top-full border">
            {renderedOptions}
        </Panel>}
    </div>
  )
}
