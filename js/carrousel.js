const mockItems = [
  {
    name: "Vivamus quam ex, ultricies et blandit sed",
    fullPrice: "R$ 35,90",
    discountPrice: "R$ 18,90",
    image: "imgs/product/product-2.png",
  },
  {
    name: "Morbi condimentum egestas quam - 3m",
    fullPrice: "R$ 35,90",
    discountPrice: "R$ 18,90",
    image: "imgs/product/product-1.png",
  },
  {
    name: "Vivamus quam ex, ultricies et blandit sed",
    fullPrice: "R$ 35,90",
    discountPrice: "R$ 18,90",
    image: "imgs/product/product-2.png",
  },
];

const renderList = [
  ...mockItems,
  ...mockItems,
  ...mockItems,
  ...mockItems,
  ...mockItems,
];

const containers = document.getElementsByClassName("products-carrousel");

Array.from(containers).forEach((el) => {
  //navigation
  const navigationContainer = document.createElement("div");
  el.appendChild(navigationContainer);
  navigationContainer.classList.add("carrousel-product-navigation");

  const stepsNumber = renderList.length / 4; //4 = items by step

  for (let i = 0; i < stepsNumber; i++) {
    navigationContainer.insertAdjacentHTML(
      "afterbegin",
      `<div class='carrousel-step' onclick='handleChangeStep(${i})'></div>`
    );
  }

  // List
  const carrouselContainer = document.createElement("div");
  el.appendChild(carrouselContainer);
  carrouselContainer.classList.add("carrousel-product-list");

  renderList.forEach((p) => {
    carrouselContainer.insertAdjacentHTML(
      "afterbegin",
      `
        <div class="product-column">
        <div class="product-image-container">
          <img src="${p.image}" alt="${p.name}" />
          <div class="image-icons-container">
            <div class="image-icon">
              <img src="imgs/header/wish.png" alt="" />
            </div>
            <div class="image-icon">
              <img src="imgs/header/cart.png" alt="" />
            </div>
          </div>
        </div>
    
        <div class="product-content">
          <span class="product-name"
            >${p.name}</span
          >
          <img src="imgs/product/rate.png" alt="rating" />
    
          <div class="price-content">
            <span class="discount-price">${p.discountPrice}</span>
            <span class="full-price">${p.fullPrice}</span>
          </div>
    
          <button>comprar</button>
        </div>
      </div>
      `
    );
  });
});
