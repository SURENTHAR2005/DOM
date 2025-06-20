let cartQuantity = Number(localStorage.getItem("cartQuantity"));

if (!cartQuantity) {
    localStorage.setItem("cartQuantity", 0);
    cartQuantity = 0;
}
const display=document.getElementById("displaybutton");
const plus1=document.getElementById("plus1button");
const plus2=document.getElementById("plus2button");
const plus3=document.getElementById("plus3button");
const reset=document.getElementById("resetbutton");

display.addEventListener("click",()=>{
    displayQuantity();
});
plus1.addEventListener("click",()=>{
    updateQuantity(1);
    displayQuantity();
});
plus2.addEventListener("click",()=>{
    updateQuantity(2);
    displayQuantity();
});
plus3.addEventListener("click",()=>{
    updateQuantity(3);
    displayQuantity();
});
reset.addEventListener("click",()=>{
    resetCart();
    displayQuantity();
});

function updateQuantity(value) {
    cartQuantity=cartQuantity + value;
    localStorage.setItem("cartQuantity",cartQuantity);
}

function displayQuantity() {
    console.log("cart : " + cartQuantity);

}
function resetCart() {
    cartQuantity = 0;
    console.log("the values has been reset");
    localStorage.setItem("cartQuantity",cartQuantity);
}