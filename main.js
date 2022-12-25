const table = document.getElementById("product-table");
const searchInput = document.getElementById("search-input");
const isstockedOnly = document.getElementById("is-stocked-only");

searchInput.addEventListener("input", (e) => {
  searchValue = e.target.value;
  render();
});

isstockedOnly.addEventListener("change", (e) => {
  isStocked = e.target.checked;
  render();
});

let searchValue = "";
let isStocked = false;

function render() {
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
