// scripts.js
let cart = [];
let totalPrice = 0;

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    totalPrice += price;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.price} руб`;
        cartItems.appendChild(li);
    });
    document.getElementById('total-price').textContent = `Итог: ${totalPrice} руб`;
}
