function removeDuplicate(arr){
    let removeduplicateValues =[]
    arr.forEach(function(item){
        if(removeduplicateValues.indexOf(item) < 0) {
            removeduplicateValues.push(item);
        }
        
    }
    
    );
    return removeduplicateValues
}
console.log(removeDuplicate([1,2,3,3,4,'jose','jose']))