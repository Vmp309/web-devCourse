// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
console.log(dragons.includes("John"))

// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons2 = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
let array = []
dragons2.forEach((item) => {
    item.includes('Johnathan')? array.push(item) : ""
})
console.log(array);

// #3) Create a function that calulates the power of 100 of a number entered as a parameter
let calculate = num => num**100
console.log(calculate(2));

// #4) Using your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result
