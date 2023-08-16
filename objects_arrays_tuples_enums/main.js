// Arrays - stuff
var names = ["John", "Dave", "Bill"];
// Access/Adding
console.log(names[0]);
// modify by index
names[0] = "Kennedy";
// add to end and return value added
names.push("John");
// add to the beggining and return new length
names.unshift("Firstname");
// Map
Object.entries(names).map(function (name) {
    console.log(name.toString().toUpperCase());
});
var arr = [1, 5, 7, 9];
// Reduce
var sum = arr.reduce(function (result, current) {
    return result + current;
}, 0);
console.log(sum);
// Filter - Filtra array, buscando por John
var john = names.filter(function (name) { return name === "John"; });
console.log(john);
// Contenido extra: TUPLAS - definimos tipo - valor para saber que es una tupla
var tupla = ["Viri", 25, false];
console.log(typeof tupla, tupla);
var willy = {
    name: "Willy",
    age: 19,
    hired: true,
    languajes: ["Javascript", "C#", "ASM"],
};
