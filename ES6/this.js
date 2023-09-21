const Person ={
    name :'joselyne',
    walk(){},
    talk(){
        console.log(this);
    }
}
Person.walk()

const walk = Person.walk;
(walk);