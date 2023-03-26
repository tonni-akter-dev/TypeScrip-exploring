"use strict";
/* let username='Tonni Akter bithi'
console.log(username);
 

let a:number=12
let b:number=6
let c:number=2

console.log(a/b) */
// lesson-2 data type
/* let myName: string = "Tonni";
let age: number;
let isLoading: boolean;
let album: any;
let posId: string | number;
let isActive: string | boolean | number; //union types

age = 23;
isLoading = true;
album = "ase";
const sum = (a: string, b: string) => {
  return a + b;
};
// regular expression
let re: RegExp = /\w+/g; */
// lesson-3-------------------------------------------------------------------------------
let strArray = ["tonni", "ayat", "maya"];
let guiters = ["sstrat", 550, "les paul"];
let mixedArray = ["EVH", 1980, true];
strArray[0] = "mazharul";
strArray.push("hey");
guiters[0] = 1984;
guiters.unshift("jim"); //we can not assign boolean value because when we declare we define string and number type
// strArray=guiters--gives us an error but-
guiters = strArray; // will be executed because guiters array te str and number type ase ja strArray te ase mane beshi type ta age hbe
let test1 = []; //any type array declare
let birds = [];
birds.push("koel");
// console.log(birds);
// tuple
let myTuple = ["Tonni", 23, true];
myTuple[1] = 23;
let mixed = ["john", 1, false];
mixed = myTuple; //no error
// myTuple=mixed //error Type '(string | number | boolean)[]' is not assignable to type '[string, number, boolean]'.Target requires 3 element(s) but source may have fewer.
//-------------------objects-------------------------
let myObj;
myObj = [];
// console.log(typeof myObj);
myObj = birds;
myObj = {};
const exampleObj = {
    prop1: "Tonni",
    prop2: true,
};
exampleObj.prop2 = false; //boolean nibe just
/* interface Guiterist {
  name?: string;
  active?: boolean;
  albums: (string | number)[];
} */
let evh = {
    name: "Tonni",
    active: false,
    albums: [1984, 5150, "UOB12"],
};
let jp = {
    //   name: "Ayat",
    //   active: true,
    albums: [1984, 5150, "UOB12"],
};
// jp = evh; //no problem but if jp has one property active missing then it will cause an error but if we declaree active property as an optional then if it is missing then it will not cause an error
const greetGuiterist = (guiterist) => {
    // return `Hello ${guiterist.name?.toUpperCase()}`; //object declation a  optional thakle aikhane optional dite hbe naile error dibe
    //or we can use if condition for ? mark
    if (guiterist.name) {
        return `Hello ${guiterist.name.toUpperCase()}`;
    }
    return `Hello`;
};
console.log(greetGuiterist(jp));
