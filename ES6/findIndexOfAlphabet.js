const findIndexOfAlphabet =(text)=>{
    let alphabet ="abcdefghijklmnopqrstuvwxyz".split('')
    return text.toLowerCase().split('').map(x =>alphabet.indexOf(x)+1).filter(x=>x>1).join('')
} 
console.log(findIndexOfAlphabet("The sunset sets at twelve o' clock."));