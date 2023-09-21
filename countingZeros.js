function countZeros(n) {
    let arrCount =[];
    for(let i=1;i<n;i++){
      arrCount.push(i);
    }
      return arrCount.toString( ).split('').filter(arrCount =>arrCount ==0).length;
  }
  
  console.log(countZeros(50));
  