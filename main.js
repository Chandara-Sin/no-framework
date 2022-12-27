let PRODUCTS = [];

const fetchProducts = async () => {
  try {
    const response = await fetch("products.json");
    PRODUCTS = await response.json();
  } catch (e) {
    console.error(e);
  }
};

const table = document.getElementById("product-table");
const searchInput = document.getElementById("search-input");
const isstockedOnly = document.getElementById("is-stocked-only");

fetchProducts()
  .then(() => table.setAttribute("products", JSON.stringify(PRODUCTS)))
  .catch((e) => console.error(e));

let searchValue = "";
let isStocked = false;

searchInput.addEventListener("input", (e) => {
  searchValue = e.target.value;
  handleProductsChange();
});

isstockedOnly.addEventListener("change", (e) => {
  isStocked = e.target.checked;
  handleProductsChange();
});

const handleProductsChange = () => {
  const filteredProducts = PRODUCTS.filter((p) =>
    p.name.startsWith(searchValue)
  ).filter((p) => (isStocked ? p.stocked : true));
  table.setAttribute("products", JSON.stringify(filteredProducts));
};

const hp = document.getElementById("first-hello-planet");
const planetInput = document.getElementsByTagName("planet-input")[0];
planetInput.addEventListener("planetChanged", (e) => {
  hp.setAttribute("name", e.detail);
});
