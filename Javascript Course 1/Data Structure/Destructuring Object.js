//Destructuring Object
const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
}
 
const {firstName, lastName, age} = profile;
 
console.log(firstName, lastName, age);



//Assigning to Different Local Variable Names
const {firstName: localFirstName, lastName: localLastName, age: localAge} = profile;
 
console.log(localFirstName);
console.log(localLastName);
console.log(localAge);