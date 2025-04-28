
const cartItems = [
    {
      category: "Pet food",
      title: "Pet care",
      img: "./img/pet.jfif",
      star: "⭐️⭐️⭐️⭐️",
      price: "$18.56"
    },
    {
      category: "Pet food",
      title: "Pet care",
      img: "./img/pet.jfif",
      star: "⭐️⭐️⭐️⭐️",
      price: "$18.56"
    },
    {
      category: "Pet food",
      title: "Pet care",
      img: "./img/pet.jfif",
      star: "⭐️⭐️⭐️⭐️⭐️",
      price: "$18.56"
    },
    {
      category: "Pet food",
      title: "Pet care",
      img: "./img/pet.jfif",
      star: "⭐️⭐️⭐️",
      price: "$18.56"
    },
    {
      category: "vegitable",
      title: "Food and Vegitable",
      img: "./img/veg.jfif",
      star: "⭐️⭐️⭐️⭐️",
      price: "$18.56"
    },
    {
      category: "vegitable",
      title: "Food and Vegitable",
      img: "./img/veg.jfif",
      star: "⭐️⭐️⭐️⭐️",
      price: "$18.56"
    },
    {
      category: "vegitable",
      title: "Food and Vegitable",
      img: "./img/veg.jfif",
      star: "⭐️⭐️⭐️",
      price: "$18.56"
    },
    {
      category: "vegitable",
      title: "Food and Vegitable",
      img: "./img/veg.jfif",
      star: "⭐️⭐️⭐️⭐️⭐️",
      price: "$18.56"
    },
    {
      category: "Drink",
      title: "Soft Drink",
      img: "./img/soft.jfif",
      star: "⭐️⭐️⭐️⭐️",
      price: "$20.56"
    },
    {
      category: "Drink",
      title: "Soft Drink",
      img: "./img/soft.jfif",
      star: "⭐️⭐️⭐️⭐️",
      price: "$16.56"
    },
    {
      category: "Drink",
      title: "Soft Drink",
      img: "./img/soft.jfif",
      star: "⭐️⭐️⭐️",
      price: "$13.56"
    },
    {
      category: "Drink",
      title: "Soft Drink",
      img: "./img/soft.jfif",
      star: "⭐️⭐️⭐️⭐️",
      price: "$26.56"
    },
  
  ];
  
  const container = document.getElementById("cart-container");
  
  container.innerHTML = cartItems.map(item => `
      <div class="card p-2 mt-3" style="width: 18rem;">
        <img src="${item.img}" class="card-img-top" alt="${item.title}">
        <div class="card-body">
          <p class="card-title">${item.category}</p>
          <h5 class="card-title fs-5">${item.title}</h5>
          <p class="card-title ">${item.star}</p>
          <div class="d-flex justify-content-between align-items-center mt-3">
          <div class="price mb-0 text-black">${item.price}</div>
         <button class="btn btn-success btn-sm">+ Add to cart</button>
      </div>
        </div>
      </div>
    `).join("");
  
  