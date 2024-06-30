const MainProductContainer = document.getElementById("Main-Product-Container");
const prevBtn = document.getElementById("Previous-Btn");
const nextBtn = document.getElementById("Next-Btn");

let currentPage = 1;
let limit = 2;
let products = [];

fetch("../data.json")
  .then((response) => response.json())
  .then((data) => {
    products = data;
    showProducts();
  });

function showProducts() {
  MainProductContainer.textContent = "";

  const start = (currentPage - 1) * limit;
  const end = start + limit;

  const productToDisplay = products.slice(start, end);

  productToDisplay.forEach((product) => {
    // Create the new parent div
    const productContainer = document.createElement("div");
    productContainer.classList.add("Product-Container");

    const Container = document.createElement("div");
    Container.classList.add("Container");

    const productContent = document.createElement("div");
    productContent.classList.add("Product-Content");

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("Img-Container");

    const img = document.createElement("img");
    img.src = product.img;
    img.classList.add("img");
    imgContainer.appendChild(img);

    const productInfo = document.createElement("div");
    productInfo.classList.add("Product-Info");

    const productName = document.createElement("h2");
    productName.textContent = product.name;
    productInfo.appendChild(productName);

    const productDescription = document.createElement("span");
    productDescription.textContent = product.description;
    productInfo.appendChild(productDescription);

    const productBtn = document.createElement("button");
    productBtn.textContent = "SEE PRODUCT";
    productInfo.appendChild(productBtn);
    productBtn.addEventListener("click", function () {
      viewMore(product.id);
    });

    Container.appendChild(productInfo);
    Container.appendChild(imgContainer);

    productContainer.appendChild(Container);

    MainProductContainer.appendChild(productContainer);
  });
}

function viewMore(productId) {
  if (productId) {
    window.location.href = `soloproduct.html?id=${productId}`;
  } else {
    console.error("Product ID is undefined");
  }
}

prevBtn.addEventListener("click", function () {
  if (currentPage > 1) {
    currentPage--;
    showProducts();
  }
});

nextBtn.addEventListener("click", function () {
  if (currentPage < Math.ceil(products.length / limit)) {
    currentPage++;
    showProducts();
  }
});
