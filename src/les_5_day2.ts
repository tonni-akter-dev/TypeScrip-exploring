// ---------------------Type Assertions/type casting----------------
type One = string;
type Two = string | number;
type Three = "hello";

//convert to more or less specific
let a: One = "hello";
let b = a as Two; // less specific
let c = a as Three; //more specific

let d = <One>"world";
let e = <string | number>"world";

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return a + b;
  return "" + a + b;
};

let myVal: string = addOrConcat(2, 2, "concat") as string;
//Be careful! TS sees no problem - but a string is returned
let nextVal: number = addOrConcat(2, 2, "concat") as number;

// 10 as string// error
10 as unknown as string; //no complain

// The DOM
const img = document.querySelector("img")!;
//  ! not null assersion---
const myImage = document.getElementById("#img") as HTMLImageElement;
const nextImage = <HTMLImageElement>document.getElementById("#img");
img.src;
myImage.src;

// dom --- original js code
/* const year=document.getElementById("year")
const thisYear=new Date().getFullYear()
year.setAttribute("datetime",thisYear)
year.textContent=thisYear */

// using ts
//first variations
/* let year: HTMLElement | null;
year = document.getElementById("year");
let thisYear: string;
thisYear = new Date().getFullYear().toString();
if (year) {
  year.setAttribute("datetime ", thisYear);
  year.textContent = thisYear;
} */
//second variations
const year = document.getElementById("year") as HTMLSpanElement;
const thisYear: string = new Date().getFullYear().toString();
year.setAttribute("datetime ", thisYear);
year.textContent = thisYear;

// ---------------------Type Assertions----------------
