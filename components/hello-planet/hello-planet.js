class HelloPlanet extends HTMLElement {
  static get observedAttributes() {
    return ["name"];
  }

  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    const h1 = document.createElement("h1");
    h1.setAttribute("id", "hello");
    shadow.appendChild(h1);

    this.setHello(h1);
  }

  connectedCallback() {}

  attributeChangedCallback(changedAttribute) {
    if (changedAttribute === "name") {
      const h1 = this.shadowRoot.getElementById("hello");
      this.setHello(h1);
    }
  }

  setHello(h1) {
    h1.innerText = "Hello " + this.getAttribute("name");
  }
}

customElements.define("hello-planet", HelloPlanet);
