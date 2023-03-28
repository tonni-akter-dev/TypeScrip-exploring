// 1
/* class Coder {
  name!: string;
  age!: number;
  music!: string;
  lang!: string;
  constructor(name: string, age: number, music: string, lang: string) {
    this.name = name;
    this.age = age;
    this.music = music;
    this.lang = lang;

  }
}
const Tonni=new Coder('Tonni',23,'atif','english')
console.log(Tonni) */

//2.  member visibility 2 bar na diye akbare constructor a diye dibo
class Coder {
  constructor(
    public readonly name: string,
    private age: number,
    public music: string,
    protected lang: string = "TypeScript" //protected value subclass a auto thake
  ) {
    this.name = name;
    this.age = age;
    this.music = music;
    this.lang = lang;
  }

  public getAge() {
    return `Hello, i'm ${this.age}`;
  }
}
/* const Tonni = new Coder("Tonni", 23, "atif");
// console.log(Tonni.age);
console.log(Tonni.getAge());
console.log(Tonni.name);
 */

// 3 extends class-
class webDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    age: number,
    music: string
  ) {
    super(name, age, music);
    this.computer = computer;
  }

  public getLang() {
    return `I write ${this.lang}`;
  }
}
const ayat = new webDev("Windows", "ayat", 23, "Lofi");
console.log(ayat);

// interface
interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}
class Guiterist2 implements Musician {
  name: string;
  instrument: string;
  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }
  play(action: string) {
    return `${this.name} ${action} the ${this.instrument}`;
  }
}
/* 
const Page=new Guiterist2('tonni','guiter')
console.log(Page.play('strums')) */

// static member-------
class Peeps {
  static count: number = 0;
  static getCount() {
    return Peeps.count;
  }
  public id: number;
  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}

/* const john=new Peeps('John')
const tonni=new Peeps('tonni')
const emi=new Peeps('emi')
console.log(john)
console.log(tonni)
console.log(emi)
console.log(Peeps.count) */

// ///////////////////////datastate setter/getter//////////////////
class Bands {
  private dataState: string[];
  constructor() {
    this.dataState = [];
  }

  public get data(): string[] {
    return this.dataState;
  }
  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
      this.dataState = value;
      return;
    } else throw new Error("Param is not an array of strings");
  }
}

const myBands = new Bands();
myBands.data = ["neil young", "led zep"];
console.log(myBands.data);
myBands.data = [...myBands.data, "lofi music"];
console.log(myBands.data);
myBands.data = ["skdfdkls"];
console.log(myBands.data);
