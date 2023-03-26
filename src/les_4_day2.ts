//type aliases
type stringOrNumber = string | number;
type stringOrNumberArray = (string | number)[];

type Guiterist1 = {
  name?: string;
  active?: boolean;
  albums: stringOrNumberArray;
};
type UserId = stringOrNumber;
// example 2=======================
type Point = {
  x: number;
  y: number;
};

// Exactly the same as the earlier example
/* function printCoord2(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord2({ x: 100, y: 100 });
 */

// enums---------
/* enum Grade{
    U,
    D,
    C,
    A,
    B,
    X
  }
  console.log(Grade.X) */

// interfaces=====
interface Points {
  x: number;
  y: number;
}

function printFunction(pt: Points) {
  // console.log(pt.x, pt.y);
}
printFunction({ x: 10, y: 20 });

// extends interface
/* interface Animal{
    name:string
  }
  
  interface Bear extends Animal{
    age:number
  }
  
  const bear=getBear()
  bear.name
  bear.age */

// literal types======================
let myName: "Tonni";
let userName: "Ayat" | "Bithi" | "Emi";
// userName='tonni'//tonni is not allowed because we did not assign it in the types
// console.log()
function printText(s: string, alignment: "left" | "right" | "center") {
  // console.log(alignment);
}
printText("Hello, world", "left");
// printText("G'day, mate", "centre"); //centre is not allowed

/* *********************Functions********************* */
const add = (a: number, b: number): number => {
  //return a number value
  return a + b;
};
// console.log((add(10,5)))

// without return function use void type that does not return anything

const logMsg = (message: any): void => {
  console.log(message);
};

// logMsg("Hello Tonni");
// logMsg(add(2, 3));

type mathFunction = (a: number, b: number) => number;
// interface mathFunction {
//   (a: number, b: number): number;
// }

let multiply: mathFunction = function (c, d) {
  return c * d;
};

// logMsg(multiply(2, 2));

// optional parameter-------
const addAll = (a: number, b: number, c?: number): number => {
  if (c != undefined) {
    return a + b + c;
  }
  return a + b;
};
// default parameter
const sumAll = (a: number, b: number, c: number = 2): number => {
  return a + b + c;
};

/* logMsg(addAll(2,2,3))
logMsg(addAll(2,5))
logMsg(sumAll(2,2,4))
logMsg(sumAll(2,5)) */

// ======================rest parameter==================
/* const total = (...nums: number[]): number => {
  return nums.reduce((prev, cur) => prev + cur);
};
logMsg(total(1, 2, 3, 4)); */
const total = (a: number, ...nums: number[]): number => {
  return nums.reduce((prev, cur) => prev + cur);
};

// logMsg(total(1, 2, 3, 4)); //a: number=1 r bakigula ...nums er man

/* const infinite=()=>{
  let i:number=1
  while(true){
    i++
  }
}  //ato tuku code er type never because it has no wxplicit return */
const infinite = () => {
  //if condition deoar por er type void
  let i: number = 1;
  while (true) {
    i++;
    if (i > 100) break;
  }
};

// =========error=================
const createError = (errMsg: string): never => {
  throw new Error(errMsg);
};
//custom type guard======
const isNumber=(value:any):boolean=>{
  return typeof value=='number'?true:false
}


//use of never type
/* const numOrString = (value: number | string): string => {
  if (typeof value == "number") return "number";
  if (typeof isNumber(value)) return "string";
  return createError(" This should never happen! ");
};
 */