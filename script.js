document.querySelectorAll('.product-card button').forEach(btn => {
  btn.addEventListener('click', () => {
    const name = btn.parentElement.querySelector('h3').innerText;
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push(name);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${name} added to cart (total items: ${cart.length})`);
  });
});
