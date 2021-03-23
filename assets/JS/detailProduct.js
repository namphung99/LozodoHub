// Quantity
let initialProduct = 1;
let totalProduct = 86;
function caculateDecrease(){
    if(initialProduct > 1){
        initialProduct -= 1;
    }
}
function caculateIncrease(){
    if(initialProduct <= totalProduct){
        initialProduct += 1;
    }
}

let decreaseBtn = document.querySelector('.quantity-input--decrease');
decreaseBtn.onclick = () =>{
    caculateDecrease();
    let quantity = document.querySelector('.quantity-input--main');
    quantity.innerHTML = initialProduct;
}

console.log(decreaseBtn)

let increaseBtn = document.querySelector('.quantity-input--increase');
increaseBtn.onclick = () =>{
    caculateIncrease();
    let quantity = document.querySelector('.quantity-input--main');
    quantity.innerHTML = initialProduct;
}

// Color

