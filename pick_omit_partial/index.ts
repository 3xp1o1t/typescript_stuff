// Como implementar los metodos de omit, partial y pick de Typescript.
/*
 * Ayudan a no tener que usar el operador opcional (?) en nuestra interfaz.
 * ademas le da un mejor look y entendimiento a nuestro codigo.
 */

// Definimos una interfaz la cual obligara a implementar todos sus atributos ya que
// no se usa el operador ? en sus propiedades.

interface Data {
  name: string;
  age: number;
  isMarried: boolean;
  languajes: string[];
}

// Omit -> Omite las propiedades especificadas.
function omitLanguajes(musician: Omit<Data, "languajes">) {
  return musician;
}

// Pick -> Toma unicamente las propiedades requeridas.
function pickSomeProperties(
  programmer: Pick<Data, "name" | "age" | "languajes">,
): Object {
  return programmer;
}

// Partial -> Toma cualquier propiedad ignorando al resto.
function takeAny(youngPpl: Partial<Data>){
  return youngPpl; 
}

// Output examples
console.log("Omit: \n", omitLanguajes({ name: "Pedro", age: 42, isMarried: true }));

console.log("Pick: \n",
  pickSomeProperties({
    name: "Pablo",
    age: 21,
    languajes: ["javascript", "Typescript", "c++"],
  }),
);

console.log('Partial: ')
console.log(takeAny({name: 'Timmy', age:17}))
console.log(takeAny({age: 15}))
console.log(takeAny({languajes: ['rust', 'c', 'fortran']}))
