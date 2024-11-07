/*Export a function/class that handles creating of a DOM structure for Card component. 
It has heading, description, image and tags (blue text splitted by the comma) */

import { Heading } from "./Heading";
import { TagsConstructor } from "./Tags";
import { ImageConstructor } from "./Image";

export class Card {
  #node;

  constructor(props: Object[]) {
    this.#node = document.createElement("div");
    this.#node.classList.add("card");
    this.#renderContent(props);
  }

  #renderContent(props: Object[]) {
    this.#renderImage(props);
    //this.#renderBackgound(props);
    this.#renderHeading(props);
    this.#renderParagraph(props);
    this.#renderTags(props);
    
  }
  #renderHeading(props) {
    const heading = new Heading("h6", props.heading);
    //this.#node.classList.add("title");
    //heading.setAttribute("class", "heading1");
    this.#node.append(heading.node);
  }

  #renderImage(props) {
    const img = ImageConstructor(`../assets/images/`, props.image);
    this.#node.append(img);
  }

  #renderParagraph(props) {
    const paragraph = document.createElement("article");
    paragraph.textContent = props.description;
    //this.#node.classList.add("paragraph");
    this.#node.append(paragraph);
  }

  #renderBackgound(props: Object[]) {
    const bg = document.createElement("div");
    //cardTitle.setAttribute("class", content.cardTitleStyle);
    //bg.setAttribute("class", "bg1");
    
    this.#node.append(bg);
  }





  #renderTags(props):void {
    console.log(props);
    const tags = document.createElement("article");
    //tags.textContent = props.tags;
    tags.textContent = TagsConstructor(props.tags)
    tags.classList.add("tags");
    //this.#node.classList.add("title");
    this.#node.append(tags);
  }

  get node() {
    return this.#node;
  }
}
