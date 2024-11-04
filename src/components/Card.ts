import { Heading } from "./Heading";

export class Card {
  #node;

  constructor(props: Object[]) {
    this.#node = document.createElement("p");
    this.#renderContent(props);
  }

  #renderContent(props: Object[]) {
    //    this.#node.classList.add("card"); //добавление стилей

    //this.#node.classList.add("card--red");

    /*if (props._color && props._color === "red") {
      console.log("aaa", this.#node, this.#node.classList);
      this.#node.classList.add("card--red");
    }*/

    //this.#renderImage(props);
    this.#renderBackgound(props);
    this.#renderHeading(props);
    this.#renderParagraph(props);
    this.#renderTags(props);
  }

  #renderImage(props) {
    const img = document.createElement("img");
    img.setAttribute("src", props.backgroundimage);
    this.#node.append(img);
  }

  #renderBackgound(props: Object[]) {
    const bg = document.createElement("div");
    //cardTitle.setAttribute("class", content.cardTitleStyle);
    bg.setAttribute("class", "bg1");

    this.#node.append(bg);
  }

  #renderHeading(props) {
    const heading = new Heading("h6", props.name);
    this.#node.classList.add("title");
    //heading.setAttribute("class", "heading1");
    this.#node.append(heading.node);
  }

  #renderParagraph(props) {
    const paragraph = document.createElement("p");
    paragraph.textContent = props.content;
    //this.#node.classList.add("title");
    this.#node.append(paragraph);
  }

  #renderTags(props):void {
    console.log(props);
    const tags = document.createElement("p");
    tags.textContent = props.tags;
    tags.classList.add("tags");
    //this.#node.classList.add("title");
    this.#node.append(tags);
  }

  get node() {
    return this.#node;
  }
}
