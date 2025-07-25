function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push({ name, price });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert('Added to cart');
}

window.onload = function () {
  const cartItems = document.getElementById('cart-items');
  if (cartItems) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartItems.innerHTML = cart.map(item => `<li>${item.name} - $${item.price.toFixed(2)}</li>`).join('');
  }
};