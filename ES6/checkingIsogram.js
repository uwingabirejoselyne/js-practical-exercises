const isogram = (str)=>{
    let count ={}
    result= str.toLowerCase().split('')
    for(let char of result){
       count[char] = count.hasOwnProperty(char)?count[char] +1:1
      
    }
    for(let char in count){
      if(count[char]>1){
       return false
      }
      return true
    }


  }
  console.log(isogram("Dermatoglyphics"));