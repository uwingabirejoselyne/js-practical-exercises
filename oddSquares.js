function oddSquares(arr){
    let oddNumbers =arr.filter( number =>number%2 ===1);
    return oddNumbers.map(num => num **2)
}
console.log(oddSquares([10, 15, 20, 25, 30]));