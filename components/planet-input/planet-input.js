class PlanetInput extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    const input = document.createElement("input");
    input.type = "text";
    input.addEventListener("input", () => {
      this.dispatchEvent(
        new CustomEvent("planetChanged", { detail: input.value })
      );
    });
    shadow.appendChild(input);
  }
}

customElements.define("planet-input", PlanetInput);
