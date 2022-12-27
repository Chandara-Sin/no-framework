class PlanetInput extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    const input = document.createElement("input");
    input.type = "text";
    input.style.display = "block";
    input.style.width = "15rem";
    input.style.paddingBlock = "10px";
    input.style.paddingInline = "5px";
    input.style.color = "rgb(17 24 39)";
    input.style.border = "1px solid rgb(209 213 219)";
    input.style.borderRadius = "0.35rem";
    input.style.marginTop = "1rem";
    input.style.backgroundColor = "white";
    input.setAttribute("placeholder", "Planet...");

    input.addEventListener("input", () => {
      this.dispatchEvent(
        new CustomEvent("planetChanged", { detail: input.value })
      );
    });
    shadow.appendChild(input);
  }
}

customElements.define("planet-input", PlanetInput);
