// Arrays - stuff
let names: string[] = ["John", "Dave", "Bill"];

// Access/Adding
console.log(names[0]);
// modify by index
names[0] = "Kennedy";
// add to end and return value added
names.push("John");
// add to the beggining and return new length
names.unshift("Firstname");

// Map
Object.entries(names).map((name) => {
  console.log(name.toString().toUpperCase());
});

const arr = [1, 5, 7, 9];

// Reduce
const sum = arr.reduce((result, current) => {
  return result + current;
}, 0);

console.log(sum);

// Filter - Filtra array, buscando por John
const john = names.filter((name) => name === "John");
console.log(john);

// Contenido extra: TUPLAS - definimos tipo - valor para saber que es una tupla
let tupla: [string, number, boolean] = ["Viri", 25, false];
console.log(typeof tupla, tupla);

// Objects usando Type
// Se puede usar ? para indicar que una propiedad es opcional
type Programmer = {
  name: string;
  age: number;
  hired?: boolean;
  languajes: string[];
};

let willy: Programmer = {
  name: "Willy",
  age: 19,
  hired: true,
  languajes: ["Javascript", "C#", "ASM"],
};

console.log(willy);
