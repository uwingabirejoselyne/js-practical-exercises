function divide(a,b){
    return new Promise(function(resolve,reject){
        if(b === 0){
            reject (new error("it is not possible"))
            return;
        }
        resolve( a/b)
    })

}
divide(10, 0)
  .then(function (result) {
    console.log(`division success ${result}`);
  })
  .catch(function (error) {
    console.log("There is an error in division:", error.message);
  });