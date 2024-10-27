function Heading(tag, content) {
  const node = document.createElement(tag);
  node.textContent = content;
  return node;
}

function Button(content, buttonStyle) {
  const node = document.createElement("button");
  node.textContent = content;
  node.setAttribute("class", buttonStyle);
  return node;
}

function Card(content) {
  const node = document.createElement("div");

  node.setAttribute("class", "card");
  node.setAttribute("class", content.cardBackground);

  //const cardTitle = document.createElement("p");
  const cardTitle = Heading("h2", content.cardTitle);
  cardTitle.setAttribute("class", content.cardTitleStyle);
  //cardTitle.textContent = content.cardTitle;
  node.append(cardTitle);

  const cardText = document.createElement("p");
  cardText.textContent = content.cardText;
  cardText.setAttribute("class", content.pColor);
  node.append(cardText);

  const cardButton = Button(content.cardButtonName, content.buttonStyle);
  node.append(cardButton);
  return node;
}

function Grid() {
  const node = document.createElement("ul");
  node.setAttribute("class", "grid");
  return node;
}

//Heading("h1");
//-------------------!!!!!!!!!!!!!!!!!!!!!!!--------------------------------//
document.addEventListener("DOMContentLoaded", () => {
  //start to build the page
  //const grid = document.createElement("u1");
  //grid.textContent = "123";
  const grid = Grid();
  document.body.append(grid);

  const h1 = Heading("h1", "Last works");
  //публикация элемента
  grid.append(h1);

  const button01 = Button("Explore Showcase", "buttonDefault");
  grid.append(button01);
  //document.body.append(button01);

  const data = [
    {
      cardTitle: "Startup Framework",
      cardText:
        "Startup is a powerful tool for quick and convenient proto-typing of your projects. It will fit most projects because it contains up-to-date and modern web elements.",
      cardButtonName: "Explore",
      cardTitleStyle: "cardTitleDefault",
      pColor: "pColorDefault",
      buttonStyle: "buttonDefault",
      cardBackground: "cardGrey",
    },
    {
      cardTitle: "Web Generator",
      cardText:
        "Startup is a powerful tool for quick and convenient proto-typing of your projects. It will fit most projects because it contains up-to-date and modern web elements.",
      cardButtonName: "Explore",
      cardTitleStyle: "cardTitleDefault",
      pColor: "pColorDefault",
      buttonStyle: "buttonGreen",
      cardBackground: "cardWhite",
    },
    {
      cardTitle: "Slides 4",
      cardText:
        "All of these components are made in the same style, and can easily be inegrated into projects, allowing you to create hundreds of solutions for your future projects.",
      cardButtonName: "Explore",
      cardTitleStyle: "cardTitleWhite",
      pColor: "pColorWhite",
      buttonStyle: "buttonDefault",
      cardBackground: "cardBlue",
    },
    {
      cardTitle: "Postcards",
      cardText:
        "All frequently used elements are now in symbols. Use them to create interfaces really fast. Easily change icons, colors and text. Add new symbols to customize your design.",
      cardButtonName: "Explore",
      cardTitleStyle: "cardTitleWhite",
      pColor: "pColorWhite",
      buttonStyle: "buttonDefault",
      cardBackground: "cardPicture",
    },
  ];
  //вложенные  объекты
  /*
  {
  card: {
    title: 'Some title',
    button: {
      name: 'Click me',
    }
  },
  p: {
    style: 'color: red'
  }
}
  */

  const cardsContainer = document.createElement("div");

  cardsContainer.setAttribute("class", "cardsContainer");

  const cards = data.map((content) => Card(content));
  cardsContainer.append(...cards);
  document.body.append(cardsContainer);
});
