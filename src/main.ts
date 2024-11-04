import { Heading } from "./components/Heading";
import { Card } from "./components/Card";

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
  hdiv.style.width = "756px";
  hdiv.style.backgroundColor = "white";

  const h1 = new Heading("h1", "Our Works");

  const pagetext = new Description(
    "The most important part of the Startup Framework is the samples. The samples form a set of 20 usable pages you can use as is or you can add new blocks from UI Kit."
  );

  hdiv.append(h1.node, pagetext.node);

  const grid = new Grid();
  grid.node.setAttribute("class", "grid");
  const cards = props.map((content) => new Card(content));

  //node.append(h1.node);
  //node.append(pagetext.node);
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

function loadData() {
  return [
    {
      name: "Startup Framework",
      content:
        "Startup Framework works fine on devices supporting Retina Desplay. Feel the clarity!",
      backgroundimage: {
        url: "./assets/images/card-02.jpg",
      },
      _color: "red",
      tags: "Ui kit, Framework, Landing page, generator",
    },

    {
      content:
        "We have created a new product that will help designers create websites for their startups.",
      name: "Slides",
      backgroundimage: { url: "./assets/images/card-02.jpg" },
      _color: "red",
      tags: "Ui kit, Framework, Landing page, generator",
    },
    {
      content:
        "Components and blocks are fixed to the common and popular 12 Grid system.",
      name: "Flat UI Pro",
      backgroundimage: { url: "./assets/images/card-03.jpg" },
      tags: "Ui kit, Framework, Landing page, generator",
    },

    {
      content:
        "We have created a new product that will help designers create websites for their startups.",
      name: "Slides",
      backgroundimage: { url: "./assets/images/card-04.jpg" },
      tags: "Ui kit, Framework, Landing page, generator",
    },
  ];
}

function initApp() {
  const data = loadData();

  renderPage(data);
}

function f1 () {
  // Находим оба поля
const inputField1 = document.getElementById("input1");
const inputField2 = document.getElementById("input2");

// Добавляем обработчик события "input" для первого поля
inputField1.addEventListener("input", function() {
  // Получаем значение первого поля, приводим его к числу
  const inputValue = parseFloat(inputField1.value);

  // Проверяем, является ли значение числом
  if (!isNaN(inputValue)) {
    // Вычисляем результат по формуле, например, удваиваем значение
    inputField2.value = inputValue * 2;
  } else {
    // Очищаем второе поле, если ввод некорректен
    inputField2.value = "";
  }
});
}

document.addEventListener("DOMContentLoaded", () => {
  // start to build our page
  initApp();
  //f1();
});
