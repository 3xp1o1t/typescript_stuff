// Como implementar los metodos de omit, partial y pick de Typescript.
/*
 * Ayudan a no tener que usar el operador opcional (?) en nuestra interfaz.
 * ademas le da un mejor look y entendimiento a nuestro codigo.
 */
var MiClase = /** @class */ (function () {
    function MiClase(name, age) {
        this.name = name;
        this.age = age;
    }
    return MiClase;
}());
// Crear una instancia de la clase omitiendo la propiedad 'edad'
var personaSinEdad = new MiClase("Juan", 30);
console.log(personaSinEdad.name); // Acceso permitido
