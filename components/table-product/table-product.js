class TableProduct extends HTMLElement {
  static get observedAttributes() {
    return ["products"];
  }

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const table = document.createElement("table");
    table.setAttribute("id", "product-table");
    table.createTBody();
    const tHead = table.createTHead();
    const headerRow = tHead.insertRow();
    headerRow.insertCell().outerHTML = "<th>Name</th>";
    headerRow.insertCell().outerHTML = "<th>Price</th>";

    shadow.appendChild(table);
  }

  attributeChangedCallback(changedAttribute) {
    if (changedAttribute === "products") {
      this.render(JSON.parse(this.getAttribute("products")));
    }
  }

  render = (products) => {
    const table = this.shadowRoot.getElementById("product-table");
    this.clear(table);
    for (const product of new Set(
      products.map((product) => product.category)
    )) {
      this.addSectionHeader(table, product);
      const productsInCat = products.filter((p) => p.category === product);
      this.addProducts(table, productsInCat);
    }
  };

  clear = (t) => {
    while (t.rows.length !== 0) {
      t.deleteRow(t.rows[t.rows.length - 1]);
    }
    this.addHeader(t);
  };

  addHeader = (t) => {
    const tHead = t.createTHead();
    const headerRow = tHead.insertRow();
    headerRow.insertCell().outerHTML = "<th>Name</th>";
    headerRow.insertCell().outerHTML = "<th>Price</th>";
  };

  addSectionHeader = (t, category) => {
    const row = t.insertRow();
    const th = document.createElement("th");
    th.setAttribute("colspan", 2);
    th.innerText = category;
    row.appendChild(th);
  };

  addProducts = (t, products) => {
    for (const product of products) {
      const row = t.insertRow();

      const nameTd = document.createElement("td");
      nameTd.innerText = product.name;
      const priceTd = document.createElement("td");
      priceTd.innerText = product.price;

      if (!product.stocked) {
        nameTd.style.color = "red";
      }
      row.appendChild(nameTd);
      row.appendChild(priceTd);
    }
  };
}

customElements.define("table-product", TableProduct);
