

// setTimeout-asynchronous-run only once
// function hello(){
//     console.log("hello from settime out");
// }
// setTimeout(hello,5000);//ms
// setTimeout(()=>console.log("hello from settimeout"),5000);
// console.log("hello from js");


// setInterval-run repetedly
// let count = 0;
// const timer = setInterval(() => {
//     count++;
//     console.log("hello from set interval");
//     if (count > 5) {
//         clearInterval(timer);
//     }
// }, 3000);

// console.log("hello from async ");

//callbacks-call back hell -nested callback contains
// function doTask(Taskname, callback) {
//     console.log(`starting ${Taskname}...`);
//     setTimeout(() => {
//         console.log(`${Taskname} complete!`);
//         callback();
//     }, 5000);
// }

// doTask("reading book", () => {
//     console.log("now reading chapter 10");
// });

//promices
let order = new Promise((resolve, reject) => {
    let isOverWorking = true;
    setTimeout(() => {
        if (isOverWorking) {
            resolve("order is ready");
        } else {
            reject("order delay");
        }
    }, 3000);
});
order
    .then((message) => { console.log("Success: ", message); })
    .catch((error) => {
        console.log("Error: ", error);
    });