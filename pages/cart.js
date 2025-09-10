async function getData() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length !== 0)
    document.querySelector(".bag-count").textContent = cart.length;
  let res = await fetch("https://dummyjson.com/products?limit=10");
  let productsData = await res.json();
  let data = productsData.products;
  let cartData = data.filter((item) => cart.includes(item.id));

  let productleft = document.querySelector(".product-left");

  let innerHTML = ``;

  cartData.forEach((item) => {
    innerHTML += `<div class="product-lefts">
         <i class="fa-solid fa-circle-xmark" data-id="${item.id}"></i>
            <img src="${item.thumbnail}"/>
          <div class="product-left-detalis">
            <h2>${item.title}</h2>
            <p class="price">₹ ${item.price}</p>
            <p id="percentage">${item.discountPercentage}% off</p>
          </div>
        </div>`;
  });
  productleft.innerHTML = innerHTML;
  
  const buttons = document.querySelectorAll(".fa-circle-xmark");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      let id = Number(button.getAttribute("data-id"));
      console.log("hello");

     cart = cart.filter((i) => id != i);
      localStorage.setItem("cart", JSON.stringify(cart));
          
      console.log(cart);
      getData();
      
    });
  });
}
getData();
