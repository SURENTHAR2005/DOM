normalobject={
    name:"Surenthar V B",
    age:40
}
jsonobject={
    "name":"Surenthar V B",
    "age":20
}

let stringJSON=JSON.stringify(jsonobject);
console.log(stringJSON);
console.log(typeof stringJSON);

let normalobject=JSON.parse(stringJSON)
console.log(normalobject);
console.log(typeof normalobject);

//local storage
localStorage.setItem("username","jhin joe");
let item=localStorage.getitem("username");
console.log(item);

// localStorage.removeItem("username");
// let item2=localStorage.getitem("username");
// console.log(item2);

sessionStorage.setItem("username","jon joe");
sessionStorage.setItem