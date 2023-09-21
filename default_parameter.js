function greet(name,greeting){
    name = (typeof name !== 'undefined') ?  name : 'Student';
    greeting = (typeof greeting !== 'undefined') ?  greeting : 'Welcome';
  
    return `${greeting} ${name}!`;
}
greet(); 
greet('James'); 
greet('Richard', 'Howdy'); 