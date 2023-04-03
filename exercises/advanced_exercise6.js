//Evaluate these:
//#1
//Resposta: Os dois retornarao falso pois há uma declaracao de elementos diferentes dos dois lados, embora tenham o mesmo valor, não são da mesma "instância"
[2] === [2]
{} === {} 



//#2 what is the value of property a for each object.
//Resposta: 
const object1 = { a: 5 }; //5
const object2 = object1; //5
const object3 = object2; //5
const object4 = { a: 5}; //5
object1.a = 4;

//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 
class Animal {
	constructor(name, type, color) {
		this.name = name;
		this.type = type;
    this.color = color;
	}
}

class Mamal extends Animal {
	constructor(name, type, color) {
		super(name, type, color)
	}
	sound() {
		console.log(`Moooo ${this.name}, eu sou da cor ${this.color} e do tipo ${this.type}`);
	}
}

const cow = new Mamal('Melindra', 'vaquinha', 'malhada');