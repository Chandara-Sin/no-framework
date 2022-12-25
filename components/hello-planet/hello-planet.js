class HelloPlanet extends HTMLElement {
  static get observedAttributes() {
    return ["name"];
  }

  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    const template = document.getElementById("hello-planet-template").content;
    shadow.appendChild(template.cloneNode(true));
    this.setHello();
  }

  connectedCallback() {}

  attributeChangedCallback(changedAttribute) {
    if (changedAttribute === "name") {
      this.setHello();
    }
  }

  setHello() {
    const h1 = this.shadowRoot.getElementById("hello");
    h1.innerText = "Hello " + this.getAttribute("name");
  }
}

customElements.define("hello-planet", HelloPlanet);
