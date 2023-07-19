

function sortProducts(obj) {
    const sortedArray = Object.entries(obj).sort((a, b) => a[1] - b[1]);
    const sortedObject = Object.fromEntries(sortedArray);
    return sortedObject;
  }
  
  const per = { john: 20, joselyne: 50, kelly: 30 };
  console.log(sortProducts(per));
  