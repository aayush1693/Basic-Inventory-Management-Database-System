document.addEventListener("DOMContentLoaded", () => {
  const productsContainer = document.querySelector(".products");
  const ordersContainer = document.querySelector(".orders");

  // Fetch products
  fetch('/products')
    .then(response => response.json())
    .then(products => {
      products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
          <span>Name: ${product.name}</span><br>
          <span>Quantity: ${product.quantity}</span><br>
          <span>Price: ${product.price}</span>
        `;
        productsContainer.appendChild(productDiv);
      });
    });

  // Fetch orders
  fetch('/orders')
    .then(response => response.json())
    .then(orders => {
      orders.forEach(order => {
        const orderDiv = document.createElement('div');
        orderDiv.classList.add('order');
        orderDiv.innerHTML = `
          <span>Product ID: ${order.product_id}</span><br>
          <span>Quantity: ${order.quantity}</span><br>
          <span>Order Date: ${new Date(order.order_date).toLocaleString()}</span>
        `;
        ordersContainer.appendChild(orderDiv);
      });
    });
});
