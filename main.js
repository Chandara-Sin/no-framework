let PRODUCTS = [];

async function fetchProducts() {
  try {
    const response = await fetch("products.json");
    PRODUCTS = await response.json();
  } catch (e) {
    console.log(e);
  }
}
const table = document.getElementById("product-table");
const searchInput = document.getElementById("search-input");
const isstockedOnly = document.getElementById("is-stocked-only");

fetchProducts()
  .then(() => table.setAttribute("products", JSON.stringify(PRODUCTS)))
  .catch((e) => console.error(e));

searchInput.addEventListener("input", (e) => {
  searchValue = e.target.value;
  handleProductsChange();
});

isstockedOnly.addEventListener("change", (e) => {
  isStocked = e.target.checked;
  handleProductsChange();
});

let searchValue = "";
let isStocked = false;

function handleProductsChange() {
  const filteredProducts = PRODUCTS.filter((p) =>
    p.name.startsWith(searchValue)
  ).filter((p) => (isStocked ? p.stocked : true));
  table.setAttribute("products", JSON.stringify(filteredProducts));
}

const hp = document.getElementById("first-hello-planet");
const planetInput = document.getElementsByTagName("planet-input")[0];
planetInput.addEventListener("planetChanged", (e) => {
  hp.setAttribute("name", e.detail);
});
