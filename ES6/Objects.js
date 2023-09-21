// Object is collection of key value pairs in java script
const Person ={
    name :'joselyne',
    walk(){},
    talk(){}
}
Person.talk()
Person.name='';

const targetMember = 'name'
Person[targetMember.Value] ='John'
console.log(Person);