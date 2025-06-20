const para=document.getElementById("msg");
console.log(para.innerText)
para.innerText="hello";

const hiButton=document.querySelector(".js-button");

hiButton.addEventListener("click",()=>{
    console.log("HI");
});