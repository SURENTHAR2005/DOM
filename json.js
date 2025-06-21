let normalobject={
    name:"Surenthar V B",
    age:40,
};
let jsonobject={//in json the functions are not allowed
    "name":"Surenthar V B",
    "age":20,
};

// Convert JSON object to string
let stringJSON = JSON.stringify(jsonobject); // Converts object to string
console.log(stringJSON); // Output: {"name":"Surenthar V B","age":20}
console.log(typeof stringJSON); // Output: string

// Convert string back to object
let parsedObject = JSON.parse(stringJSON); // Converts string to object
console.log(parsedObject); // Output: {name: "Surenthar V B", age: 20}
console.log(typeof parsedObject); // Output: object

//--------------------------------------------------------------------------------------------------------------
//local storage - stores permenant 
localStorage.setItem("username","jhin joe");//it push into locaclstorage
let item=localStorage.getItem("username");//take and store in item
console.log(item);

// localStorage.removeItem("username");
// let item2=localStorage.getitem("username");
// console.log(item2);


//not permenant 
sessionStorage.setItem("username","jon joe");
sessionStorage.setItem("age",23);