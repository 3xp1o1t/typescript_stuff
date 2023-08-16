/*
 * Los modificadores de acceso funcional igual que otros lenguajes como c.
 * Los metodos tambien pueden llevar modificadores de acceso.
 * Es comun usar Constructor para crear clases en Typescript.
 * Es posible usar ? fuera del contructor para definir propiedades opcionales.
 * Para definir una propiedad opcional en el constructor, simplemente se asigna un valor.
 */
class Person {
  constructor(
    public readonly name: string,
    public readonly lastName: string,
    private age: number,
    protected hired: boolean = false
  ) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.hired = hired;
  }

  public isHired() {
    return this.hired ? "hired" : "not hired";
  }
}

/* const Burt = new Person("Burt", "Kobain", 20, true);
console.log(`Currently ${Burt.name} is ${Burt.isHired()}`); */
