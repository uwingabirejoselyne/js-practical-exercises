function arrayStats(arr) {
    
    let sum = arr.reduce((a,b)=>a+b,0);
    let average = sum/arr.length;
    let minimum = Math.min(...arr)
    let maximum = Math.max(...arr)
    let result ={
        sums :sum,
        averages :average,
        minimums :minimum,
        maximums: maximum,
    }
    return result
}
console.log(arrayStats([1, 2, 3, 4, 5]));