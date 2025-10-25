import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { GoChevronDown } from 'react-icons/go';
import Panel from './Panel'

export default function DropDown({ options, value, onChange }) {
    const [isOpen, setIsOpen] = useState(false);
    const divEl = useRef();

    //drop down closes when a user clicks outside
    useEffect(() => {
        //if no div to ref return early
        if(!divEl.current) {
            return;
        }
        const handler = (e) => {
          if(!divEl.current.contains(e.target)) {
            setIsOpen(false);
          }  
        };

        //Add events during capture phase
        document.addEventListener('click', handler, true 
        )

        //cleanup function 
        const cleanup = () => {
            document.removeEventListener('click', handler )
        };

        return cleanup
    }, [])

    const handleClick = () => {
        //functional update
        setIsOpen((prev) => !prev);
    }

    window.timeTwo = performance.now();
    const handleOptionClick = (option) => {
        window.timeOne = performance.now();
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
    <div ref={divEl} className="w-48 relative">
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
