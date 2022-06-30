/*
Create a Method on an Object
Objects can have a special type of property, called a method.

Methods are properties that are functions. This adds different behavior to an object. Here is the duck example with a method:
*/
let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + duck.name + ".";}
};
console.log(duck.sayName()); //The name of this duck is Aflac.


let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() { return "This dog has " + dog.numLegs + " legs."}
};

console.log(dog.sayLegs()); //This dog has 4 legs.
