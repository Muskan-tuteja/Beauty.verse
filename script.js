// let section = document.querySelector(".products");
// // https://dummyjson.com/products

// let data = [
//   {
//     id: 1,
//     img: "images/product1.png",
//     title: "Balaan's Beauty",
//     price: 2000,
//     d_price: 1000,
//     offer: 24,
//   },
//   {
//     id: 2,
//     img: "images/product2.png",
//     title: "Maybelline Foundation",
//     price: 900,
//     d_price: 700,
//     offer: 20,
//   },
//   {
//     id: 3,
//     img: "images/product3.png",
//     title: "MAC Compact Powder",
//     price: 1500,
//     d_price: 900,
//     offer: 30,
//   },
//   {
//     id: 4,
//     img: "images/product4.png",
//     title: "L'Oréal Mascara",
//     price: 500,
//     d_price: 400,
//     offer: 30,
//   },
//   {
//     id: 5,
//     img: "images/product5.png",
//     title: "All Product kit",
//     price: 900,
//     d_price: 200,
//     offer: 80,
//   },
//   {
//     id: 6,
//     img: "images/product6.png",
//     title: "Concelaler",
//     price: 1200,
//     d_price: 800,
//     offer: 20,
//   },
//   {
//     id: 7,
//     img: "images/product7.png",
//     title: "Nykaa Eyeliner",
//     price: 500,
//     d_price: 400,
//     offer: 30,
//   },
//   {
//     id: 8,
//     img: "images/product8.png",
//     title: "Swiss Beauty Blush",
//     price: 900,
//     d_price: 450,
//     offer: 90,
//   },
//   {
//     id: 9,
//     img: "images/product9.png",
//     title: "Lakme Power",
//     price: 1200,
//     d_price: 600,
//     offer: 80,
//   },
//   {
//     id: 10,
//     img: "images/product10.png",
//     title: "Face Wash",
//     price: 7800,
//     d_price: 1200,
//     offer: 90,
//   },
// ];
// let items = ``;
// data.forEach((item) => {
//   items += `
//  <div class="product">
//  <img src="${item.img}"/>
// <h2>${item.title}</h2>
//  <p class="price">${item.price}<span>${item.d_price}/-</span></p>
//    <p id="percentage">${item.offer}% off</p>
//     <button class="btn3" onclick="addtocart()">Add Card</button>
//     </div>`;
// });
// section.innerHTML = items;

// function addtocart(){
//   let button = document.querySelector(".bag-count")
//   button.style.display = "inline-block";
//   let count = button.textContent
//   button.textContent = ++count

// }

async function getData() {
  let res = await fetch("https://dummyjson.com/products?limit=10");
  let productsData = await res.json();
  let data = productsData.products;

  onLoad(data);
  function onLoad(data) {
    let section = document.querySelector(".products");
    let items = ``;
    data.forEach((item) => {
      items += `
 <div class="product">
 <img src="${item.thumbnail}"/>
<h2>${item.title}</h2> 
  <p class="price">$${item.price}</p>
   <p id="percentage">${item.discountPercentage}% off</p>

    <button class="btn3" data-id="${item.id}">Add Card</button>
    </div>`;
    });
    section.innerHTML = items;

    let buttons = document.querySelectorAll(".btn3")
      buttons.style.display = "inline-block";

    buttons.forEach((button) =>{
      button.addEventListener("click",()=>{
        let id = button.getAttribute("data-id")
        
      })
    })
  }
}
getData();
