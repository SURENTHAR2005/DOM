// newObject={
//     display:function(){
//         console.log("hi");
//     }
// }
// console.log(newObject.display());

//dom
console.log("hi")
console.warn("warning")
console.error("Danger error") 
console.table([{ name: "surenthar v b", age: 33 }]);
console.time("loop")
for(let i=0;i<1000000000000;i++){ }
console.timeEnd("loop")

//eval() function
const x=10;
const y=20;
const result=eval("x+ y")
console.log(result);


//use strict mode
"use strict"
let a=90;
b=70;
console.log(b);