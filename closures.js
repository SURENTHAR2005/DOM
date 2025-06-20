//closures
function outer(){
    let count=0;
    console.log(`the value before increment ${count}`);
    return function inner(){
        count++;
        console.log(`the number after increment is ${count}`);
    };
}
// outer();
let closures=outer();
closures();
closures();

