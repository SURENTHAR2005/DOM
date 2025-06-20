let cartQuantity = Number(localStorage.getItem("cartQuantity"));

if (!cartQuantity) {
    localStorage.setItem("cartQuantity", 0);
    cartQuantity = 0;
}

const plus1

function updateQuantity(value) {
    cartQuantity=cartQuantity + value;
    localStorage.setItem("cartQuantity",cartQuantity);
}

function displayQuantity() {
    console.log("cart : " + cartQuantity);

}
function resetcart() {
    cartQuantity = 0;
    console.log("the values has been reset");
    localStorage.setItem("cartQuantity",cartQuantity);
}