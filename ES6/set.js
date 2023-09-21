
// Set is the same as array but it does not store duplicate value
// create a new set
const set = new Set();

// add elements to set

set.add(1)
set.add(3)
set.add(2)
set.add(5)
console.log(set);

//checking size of set
console.log(set.size)

// checking a value
console.log(set.has(3));

//delete value
console.log(set.delete(1));

//convert a set into an array

const arr = Array.from(set)
console.log(arr);