let myBag = [];

function handleAddItemToBag(item) {
  const product = mockItems.find((product) => product.id === item);

  if (product) myBag.push(product);

  document.getElementById("bag-count").innerText = myBag.length;

  const listContainer = document.querySelector(".list-container");

  listContainer.innerHTML = "";

  myBag.forEach((item) => {
    listContainer.insertAdjacentHTML(
      "afterbegin",
      `<div class='bag-item'>
        <img src='${item.image}' />
        <div class='bag-container'>
          <span class='item-name'>${item.name}</span>
          <div>
           <span class='item-description'>Cor: ${item.color}</span>
           <span class='item-description'>Tamanho: ${item.size}</span>
          </div>
          <span class='item-price'> ${item.discountPrice}</span>
        </div>
      </div>`
    );
  });

  const totalAmount = myBag
    .map((item) => item.discountPrice.replace("R$ ", "").replace(",", "."))
    .reduce((a, b) => +a + +b, 0)
    .toFixed(2);

  document.querySelector(".total").innerText = "subtotal: R$ " + totalAmount;
}

function handleOpenAndCloseBag() {
  document.querySelector(".side-bar-container").classList.toggle("hidden");
}

function handleSendBag() {
  myBag = [];
  document.querySelector(".list-container").innerHTML = "";
  handleAddItemToBag();
}
