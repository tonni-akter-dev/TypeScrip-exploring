"use strict";
function printFunction(pt) {
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
let myName;
let userName;
// userName='tonni'//tonni is not allowed because we did not assign it in the types
// console.log()
function printText(s, alignment) {
    // console.log(alignment);
}
printText("Hello, world", "left");
// printText("G'day, mate", "centre"); //centre is not allowed
/* *********************Functions********************* */
const add = (a, b) => {
    //return a number value
    return a + b;
};
// console.log((add(10,5)))
// without return function use void type that does not return anything
const logMsg = (message) => {
    console.log(message);
};
// interface mathFunction {
//   (a: number, b: number): number;
// }
let multiply = function (c, d) {
    return c * d;
};
// logMsg(multiply(2, 2));
// optional parameter-------
const addAll = (a, b, c) => {
    if (c != undefined) {
        return a + b + c;
    }
    return a + b;
};
// default parameter
const sumAll = (a, b, c = 2) => {
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
const total = (a, ...nums) => {
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
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
// =========error=================
const createError = (errMsg) => {
    throw new Error(errMsg);
};
//custom type guard======
const isNumber = (value) => {
    return typeof value == 'number' ? true : false;
};
//use of never type
/* const numOrString = (value: number | string): string => {
  if (typeof value == "number") return "number";
  if (typeof isNumber(value)) return "string";
  return createError(" This should never happen! ");
};
 */ 
