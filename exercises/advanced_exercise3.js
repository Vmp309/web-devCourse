//let + const
let a = 'test'
const b = true
const c = 789

a = 'test2'

//Deestructiring
const person = {
  firstName : "John",
  lastName  : "Doe",
  age       : 50,
  eyeColor  : "blue",
  city      : "Florida"
}

const {firstName, lastName, age, eyeColor} = person;

// Object properties
const d = 'test';
const e = true;
const f = 789;

const okObj = {d, e, f}

const message = `Hello ${firstName} have I met you before? I think we met in ${city}`

// default arguments
// default age to 10;
const isValidAge = (age = 10) => age;

const whereAmI = (username, location) => username && location ? "I am not lost" : "I'm totally lost!"

