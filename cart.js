let cart = {};

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = '';
    for (let id in cart) {
        const item = cart[id];
        const li = document.createElement("li");
li.innerHTML = `
  ${item.name} - Quantity: ${item.quantity}`;

        cartItems.appendChild(li);
    }
}

document.querySelectorAll(".add-to-cart").forEach(btn => {
    btn.addEventListener("click", () => {
        const name = btn.dataset.name;
        const id = btn.dataset.id;

        if (cart[id]) {
            cart[id].quantity++;
        } else {
            cart[id] = { quantity: 1, name: name };
        }

        updateCart();
    });
});

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = '';
    
    for (let id in cart) {
        const item = cart[id];
        const li = document.createElement("li");
        li.innerHTML = `
          ${item.name} - Quantity: ${item.quantity}
          <button class="remove-btn" data-id="${id}">Remove</button>
        `;
        cartItems.appendChild(li);
    }

    // Add event listeners to remove buttons
    document.querySelectorAll(".remove-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = btn.dataset.id;
            delete cart[id];      // Remove from cart
            updateCart();         // Update UI
        });
    });
}

document.getElementById("dark").addEventListener("click",()=>
document.body.classList.toggle("dark-mode"));




