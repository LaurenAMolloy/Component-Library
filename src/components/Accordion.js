import React from 'react'
import { useState } from 'react'
import { nanoid } from 'nanoid'
import { GoChevronDown, GoChevronLeft } from 'react-icons/go'

export default function Accordion( { items }) {
    //element will be expanded when state is 0, 1, 2
    const [expandedIndex, setExpandedIndex] = useState(-1);

    const handleClick = (nextIndex) => {
        //Functional update
        setExpandedIndex((current) => {
            if(current === nextIndex) {
            return -1;
        } else {
            return nextIndex
        }
        });
    }

    //don't forget the key prop!
    const renderedItems = items.map((item, index)=> {
        //boolean to decide if we display/remove div

        const isExpanded = index === expandedIndex;
        console.log(isExpanded)
        // if(index === expandedIndex){
        //     console.log('expanded')
        // } else {
        //     console.log('collapsed')
        // }
        
        //use ternary to add icon IF expanded is true
        const icon = 
        <span className="text-2xl">
            {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
        </span>

        return (
            <div key={nanoid()}>
                <div className="flex justify-between p-3 bg-gray-100 border-b items-center cursor-pointer" onClick={() => handleClick(index)}>
                    {item.label}
                    {icon}
                </div>
                {isExpanded && <div className="border-b p-5">{item.content}</div>}
            </div>
        )
    });

  return (
    <div className="border-x border-t rounded">{renderedItems}</div>
  )
}
