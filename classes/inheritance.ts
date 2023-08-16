class Person {
  constructor(
    public readonly name: string,
    public lastName: string,
    private age: number,
    protected hasWork: boolean = false
  ) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.hasWork = hasWork;
  }

  public isWorking() {
    return this.hasWork;
  }

  /// Getter/setter
  public get getAge() {
    return this.age;
  }

  public set setAge(age: number) {
    this.age = age;
  }
}

// Interfaz musico
interface Musician {
  instrument: string;
  experience: number;

  play(action: string): string;
}

// Subclass
class Programmer extends Person implements Musician {
  instrument: string;
  experience: number;

  constructor(
    public languajes: string[],
    name: string,
    lastName: string,
    age: number,
    instrument: string,
    experience: number
  ) {
    super(name, lastName, age);
    this.languajes = languajes;
    this.instrument = instrument;
    this.experience = experience;
  }

  public getLanguajes() {
    return this.languajes;
  }

  play(action: string) {
    return `${this.name} is ${action} the ${this.instrument}.`;
  }
}

const jason = new Programmer(
  ["Javascript", "TypeScript", "C++"],
  "Jason",
  "Statman",
  25,
  "Guitar",
  5
);

console.log(jason.play("playing"));
console.log(jason.getAge);
