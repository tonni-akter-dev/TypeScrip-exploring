"use strict";
//any types
/* let obj: any = {};
obj.name="Tonni"
obj.age=23
obj.hobby="Reading Books and do code"
console.log(obj) */
// =================function============================
// Parameter type annotation
function greet(name) {
    //   console.log("Hello, " + name.toUpperCase() + "!!");
}
//   greet(42); //gives an error because it expects string not number
greet("42");
// Return Type Annotations
/* function returnTypeAnnotations(): number {
  return 26;
}

console.log(returnTypeAnnotations()) */
// The parameter's type annotation is an object type
/* function printCoord(pt: { x: number; y: number }) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
  }
  printCoord({ x: 3, y: 7 }); */
/*   function area(pt:{width:number;height:number}){
    console.log("The area is ",pt.width*pt.height)
  }
  area({width:10,height:20}) */
//   object function=============
/* function printName(obj:{firstname:string,lastName?:string}){
console.log(obj.lastName?.toUpperCase)
}
printName({firstname:"Tonni",lastName:"Akter"}) */
