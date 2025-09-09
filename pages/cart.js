let cart = JSON.parse(localStorage.getItem("cart")) || [];

if (cart.length !== 0)
  document.querySelector(".bag-count").textContent = cart.length;

let productleft = document.querySelector(".product-left");

let innerHTML = ``;

cart.forEach((element) => {
  innerHTML += `<div class="product-lefts">
          <i class="fa-regular fa-circle-xmark"></i>
          <img src="../images/product1.png" alt="" />
          <div class="product-left-detalis">
            <h2>{item.title}</h2>
            <p class="price">{item.price}</p>
            <p id="percentage">{item.discountPercentage}% off</p>
          </div>
        </div>`;
});
productleft.innerHTML = innerHTML;
