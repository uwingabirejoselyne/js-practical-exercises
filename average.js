// function average(...numbers) {
//     let sum =0
//     for(num of numbers){
//         sum=sum+num
        
//     }
//     return sum/numbers.length;
    
// }

// console.log(average(2, 6));
// console.log(average(2, 3, 3, 5, 7, 10));
// console.log(average(7, 1432, 12, 13, 100));
// console.log(average());

// finding array difference

const arrayDiff =(a,b)=>{
    return a.filter(x =>b.includes(x))

}
console.log(arrayDiff([3, 4], [3]));

const duplicationCount = (str)=>{
 const convert = text.toLowerCase()
 const count ={}
 for(let i of convert){
    if(i in count){
        count[i] +=1
    }
    else{
        count[i] =1 
    }
 }
 let occurence = 0
 for(let b in count){
    if(count[b]>1)
    occurence +=1
 }
 return occurence
}

console.log(duplicationCount('josee'));