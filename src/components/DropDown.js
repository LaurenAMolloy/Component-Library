import React from 'react'
import { useState } from 'react'

export default function DropDown({ options }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        //functional update
        setIsOpen((prev) => !prev);
    }

    //map over options when user clicks
    const renderedOptions = options.map((option) => {
        return <div key={option.value}>
            {option.label}
        </div>
    })
  return (
    //Whenever a user clicks on this div toggle state
    //if isOpen === true display
    <div>
        <div onClick={handleClick}>Select...</div>
        {isOpen && <div>{renderedOptions}</div>}
    </div>
  )
}
