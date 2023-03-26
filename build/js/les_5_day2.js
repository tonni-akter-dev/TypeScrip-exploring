"use strict";
//convert to more or less specific
let a = "hello";
let b = a; // less specific
let c = a; //more specific
let d = "world";
let e = "world";
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
let myVal = addOrConcat(2, 2, "concat");
//Be careful! TS sees no problem - but a string is returned
let nextVal = addOrConcat(2, 2, "concat");
// 10 as string// error
10; //no complain
// The DOM
const img = document.querySelector("img");
//  ! not null assersion---
const myImage = document.getElementById("#img");
const nextImage = document.getElementById("#img");
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
const year = document.getElementById("year");
const thisYear = new Date().getFullYear().toString();
year.setAttribute("datetime ", thisYear);
year.textContent = thisYear;
// ---------------------Type Assertions----------------
