import { Heading } from "./components/Heading";
import { Card } from "./components/Card";
import cardsSource from './db/cards.json';

class Description {
  #node;
  constructor(content) {
    this.#node = document.createElement("p");
    this.#node.textContent = content;
    this.#node.setAttribute("class", "pagetext");
  }
  get node() {
    return this.#node;
  }
}

function Grid() {
  this.node = document.createElement("ul");

  this.node.setAttribute("class", "grid");
}

function Page(props) {
  const node = document.createElement("section");

  const hdiv = document.createElement("div");
  hdiv.setAttribute("class", "hdiv");

  const h1 = new Heading("h1", "Our Works");

  const pagetext = new Description(
    "The most important part of the Startup Framework is the samples. The samples form a set of 20 usable pages you can use as is or you can add new blocks from UI Kit."
  );

  hdiv.append(h1.node, pagetext.node);

  const grid = new Grid();
  grid.node.setAttribute("class", "grid");
  const cards = props.map((content) => new Card(content));

  node.append(hdiv);
 

  cards.forEach((card) => {
    grid.node.append(card.node);
  });

  node.append(grid.node);

  return node;
}

function renderPage(data) {
  const page = Page(data);

  document.body.append(page);
}

function initApp() {
    renderPage(cardsSource);
}

document.addEventListener("DOMContentLoaded", () => {
  // start to build our page
  initApp();
});
