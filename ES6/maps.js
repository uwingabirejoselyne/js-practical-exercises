// create map

// modify map
const employes = new Map();
employes.set('james.parkes@udacity.com',{
    firstName: 'James',
    lastName: 'Parkes',
    role: 'Content Developer' 
})
employes.set('julia@udacity.com', {
    firstName: 'Julia',
    lastName: 'Van Cleve',
    role: 'Content Developer'
});
employes.set('richard@udacity.com', {
    firstName: 'Richard',
    lastName: 'Kalehoff',
    role: 'Content Developer'
});

// delete key in maps
employes.delete('james.parkes@udacity.com')
console.log(employes);

// you can use the .clear() method to remove all key-value pairs

employes.clear()
console.log(employes);