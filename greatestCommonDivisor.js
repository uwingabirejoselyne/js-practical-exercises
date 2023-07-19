function greatestCommonDivisor(num1,num2){
    let smallNumber;
    if(num1<num2){
        smallNumber = num1
    }
    else{
        smallNumber = num2
    }
    for(let i = 1; i <= smallNumber; i++){
        if(num1 % i === 0 && num2 % i === 0){
            GCD= i
    
        }
}
return GCD
}
console.log(greatestCommonDivisor(54,24))