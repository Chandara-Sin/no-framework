// const table = document.getElementById("product-table");
const searchInput = document.getElementById("search-input");
const isstockedOnly = document.getElementById("is-stocked-only");

searchInput.addEventListener("input", (e) => {
  searchValue = e.target.value;
  //   render();
});

isstockedOnly.addEventListener("change", (e) => {
  isStocked = e.target.checked;
  //   render();
});

let searchValue = "";
let isStocked = false;

// render();

// function render() {
//   clear(table);
//   const filteredProducts = PRODUCTS.filter((p) => {
//     return p.name.startsWith(searchValue);
//   }).filter((p) => {
//     return isStocked ? p.stocked : true;
//   });
//   const allCategories = [...new Set(filteredProducts.map((p) => p.category))];

//   for (const category of allCategories) {
//     addSectionHeader(table, category);
//     const productsInCat = filteredProducts.filter(
//       (p) => p.category === category
//     );
//     addProducts(table, productsInCat);
//   }
// }

// function clear(t) {
//   while (t.rows.length !== 0) {
//     t.deleteRow(t.rows[t.rows.length - 1]);
//   }
//   addHeader(t);
// }

// function addHeader(t) {
//   const tHead = t.createTHead();
//   const headerRow = tHead.insertRow();
//   headerRow.insertCell().outerHTML = "<th>Name</th>";
//   headerRow.insertCell().outerHTML = "<th>Price</th>";
// }

// function addSectionHeader(t, category) {
//   const row = t.insertRow();
//   const th = document.createElement("th");
//   th.setAttribute("colspan", 2);
//   th.innerText = category;
//   row.appendChild(th);
// }

// function addProducts(t, products) {
//   for (const product of products) {
//     const row = t.insertRow();

//     const nameTd = document.createElement("td");
//     nameTd.innerText = product.name;
//     const priceTd = document.createElement("td");
//     priceTd.innerText = product.price;

//     if (!product.stocked) {
//       nameTd.style.color = "red";
//     }
//     row.appendChild(nameTd);
//     row.appendChild(priceTd);
//   }
// }

const hp = document.getElementById("first-hello-planet");
const planetInput = document.getElementsByTagName("planet-input")[0];
planetInput.addEventListener("planetChanged", (e) => {
  hp.setAttribute("name", e.detail);
});
