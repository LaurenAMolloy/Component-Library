import Table from '../components/Table'
import React from 'react'
import SortableTable from '../components/SortableTable';

export default function TablePage() {
    const data = [
        { name: 'Orange', color: 'bg-orange-500', score: 5 },
        { name: 'Apple', color: 'bg-red-500', score: 3 },
        { name: 'Banana', color: 'bg-yellow-500', score: 1 },
        { name: 'Lime', color: 'bg-green-500', score: 5 },
    ];

    const config = [
        { 
            label: 'Name',
            render: (fruit) => fruit.name,
            sortValue: (fruit) => fruit.name

         },
        { 
            label: 'Color',
            render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>
         },
        { 
            label: 'Score',
            render: (fruit) => <h1>{fruit.score}</h1>,
            sortValue: (fruit) => fruit.score,
         },
    ];

    const keyFn = (fruit) => {
        return fruit.name
    }

  return (
    <div>
        <Table data={data} config={config} keyFn={keyFn} />
        <SortableTable data={data} config={config} keyFn={keyFn} />
    </div>
  )
}
