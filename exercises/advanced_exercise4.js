const function1 = (a, b) => console.log(a + b);


//Closure: What does the last line return?
//Resposta: O código abaixo retorna 13
const addTo = x => y => x + y
var addToTen = addTo(10)
addToTen(3)

//Currying: What does the last line return?
//Resposta: Retona 31
const sum1 = (a, b) => a + b
const curriedSum1 = (a) => (b) => a + b
curriedSum1(30)(1)

//Currying: What does the last line return?
//Resposta: Retorna 17
const sum2 = (a, b) => a + b
const curriedSum2 = (a) => (b) => a + b
const add5 = curriedSum2(5)
add5(12)

//Composing: What does the last line return?
//Resposta: Retorna 16
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add6 = (num) => num + 5;
compose(add1, add6)(10)

//What are the two elements of a pure function?
//Resposta: Uma função pura deve ser Determinística e não ter efeitos colaterais