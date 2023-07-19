function count(n){
let count = 0;

for(let i =1; i<=n;i++){
    if(i/10 ===0 || i%10 ===0){
        count ++;
    }
    
}
return count;
}
console.log(count(50));