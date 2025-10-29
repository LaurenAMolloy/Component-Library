const data = [ 5, 1, 4, 3]

data.sort((a, b) => {
    return a - b
});

//JS sort function converts elements to strings
//We need to use a compare function
//How do we sort objects?
//How do we sort strings?

const strings = ['t', 'Y', 'A', 'n']

strings.sort((a, b) => {
    return a.localeCompare(b)
})


const objToSort = [
    {weight: 10, cost: 5, name:'onion'},
    {weight: 10, cost: 2, name:'tomato'},
    {weight: 10, cost: 8, name:'carrot'},
];

//We are going to pull a number or string to sort

function getSortValue(veg){
    return veg.name;
}

objToSort.sort((a, b) => {
    const valueA = getSortValue(a)
    const valueB = getSortValue(b)

    if(typeof valueA === 'string'){
        return valueA.localeCompare(valueB);
    } else {
        return valueA - valueB
    }
    
})
