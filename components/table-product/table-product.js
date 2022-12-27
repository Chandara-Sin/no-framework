class TableProduct extends HTMLElement {
  static get observedAttributes() {
    return ["products"];
  }

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const table = document.createElement("table");
    table.setAttribute("id", "product-table");
    table.style.width = "100%";
    table.style.border = "1px solid rgb(209 213 219)";
    table.style.borderRadius = "0.5rem";
    table.createTBody();
    const tHead = table.createTHead();
    tHead.style.backgroundColor = "rgb(243 244 246)";
    const headerRow = tHead.insertRow();
    headerRow.insertCell().outerHTML =
      "<th style='white-space: nowrap; padding: 1rem 0.3rem 1rem 0.5rem;'>Name</th>";
    headerRow.insertCell().outerHTML =
      "<th style='white-space: nowrap; padding: 1rem 0.3rem 1rem 0.5rem;'>Price</th>";

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
    headerRow.insertCell().outerHTML =
      "<th style='white-space: nowrap; padding: 1rem 0.3rem 1rem 0.3rem; text-align: left; font-weight: 500; color: rgb(17 24 39); border-top-left-radius: 0.5rem'>Name</th>";
    headerRow.insertCell().outerHTML =
      "<th style='white-space: nowrap; padding: 1rem 0.3rem 1rem 0.3rem; text-align: left; font-weight: 500; color: rgb(17 24 39); border-top-right-radius: 0.5rem'>Price</th>";
  };

  addSectionHeader = (t, category) => {
    const row = t.insertRow();
    const th = document.createElement("th");
    th.setAttribute("colspan", 2);
    th.innerText = category;
    th.style.backgroundColor = "rgb(243 244 246)";
    th.style.fontWeight = "500";
    th.style.textAlign = "left";
    th.style.paddingBlock = "0.3rem";
    th.style.paddingInline = "0.2rem";
    row.appendChild(th);
  };

  addProducts = (t, products) => {
    for (const product of products) {
      const tBody = t.getElementsByTagName("tbody")[0];
      tBody.style.borderTopWidth = "1px";
      tBody.style.borderBottomWidth = "0px";
      tBody.style.borderColor = "rgb(229 231 235)";

      const row = tBody.insertRow();

      const nameTd = document.createElement("td");
      nameTd.innerText = product.name;
      nameTd.style.whiteSpace = "nowrap";
      nameTd.style.padding = "0.3rem 0.2rem 0.3rem 0.2rem";
      nameTd.style.textAlign = "left";

      const priceTd = document.createElement("td");
      priceTd.innerText = product.price;
      priceTd.style.whiteSpace = "nowrap";
      priceTd.style.padding = "0.3rem 0.2rem 0.3rem 0.2rem";
      priceTd.style.textAlign = "left";

      if (!product.stocked) {
        nameTd.style.color = "red";
      }
      row.appendChild(nameTd);
      row.appendChild(priceTd);
    }
  };
}

customElements.define("table-product", TableProduct);
