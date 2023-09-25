const duplicateCount=(text)=>{
    let convertText = text.toLowerCase().split('')
    let count = {};
      for (let i=0; i<convertText.length;i++){
          let character = convertText[i]
          if(count[character]>0){
              count[character]++
          }
          else{
              count[character]=1
          }
  
  
      }
      let duplicates = 0;
      for (let key in count) {
          if (count[key] > 1) {
              duplicates++;
          }
      }
  
      return duplicates;

 
}
console.log(duplicateCount('aaabbc'));