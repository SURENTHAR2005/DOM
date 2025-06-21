//msg is id ,using .innerText we able to change the text inside the tag by java-script
const para=document.getElementById("msg");
console.log(para.innerText)
para.innerText="hello";

//while clicking js-button HI is printed in console
const hiButton=document.querySelector(".js-button");

hiButton.addEventListener("click",()=>{
    console.log("HI");
});