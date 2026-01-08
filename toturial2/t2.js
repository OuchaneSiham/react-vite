//objects

const person = {
    name : "aaa",
    age: 3,
    isMar: false,
}
const {name, age, isMar} = person;

console.log(person);

const person3 = {person};

const person1 = person;

const person2 = {...person, name: "jack"}
// this puts evrything isndie person in erson2 but which change of name 

console.log(person2);

const names = ["a", "b", "c"];
const names1 = [...names, "joal"];// adds joal
console.log(names1);
