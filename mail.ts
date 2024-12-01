import { innerHTML } from './innerHTML';
import locales from './locales.json' 

console.log(innerHTML);

let currentLocal: "en" | "ar" = "en";

function changeLocale() {
    currentLocal = currentLocal === "en"? "ar" : "en";
}

const myPage = document.createElement("section");
myPage.innerHTML=innerHTML;
document.body.append(myPage);


function updateTextContent(){
    const elementsList = document.querySelectorAll("[data-i18n]");

    elementsList.forEach((element) => {
        const key = element.getAttribute("data-i18n");
        element.innerText = locales[currentLocal][key];
        element.dir = locales[currentLocal].textDirection;
    });
}

function changeTextDirection(){
    

    if (currentLocal==="en") {
        document.documentElement.style.setProperty("--flex-direction", "row");
    } else {
        document.documentElement.style.setProperty("--flex-direction", "row-reverse");
    }   



    // const navigation = document.querySelectorAll("nav")[0];
    // const header = document.querySelectorAll("header")[0];
    // if (currentLocal==="en") {
    //     header.setAttribute("class", "headerEN");
    //     navigation.setAttribute("class", "navEN");
    // } else {
    //     header.setAttribute("class", "headerAR");
    //     navigation.setAttribute("class", "navAR");
    // }
}

function footerUpdate() {
    if (currentLocal==="en") {
        document.documentElement.style.setProperty('--footer-background', 'url("./src/components/images/footerEN.png")');
    } else {
        document.documentElement.style.setProperty('--footer-background', 'url("./src/components/images/footerAR.png")');
    }   
}

function localUpdate(selectedLanguage) {
    changeLocale();
 //   alert(selectedLanguage);
    currentLocal = selectedLanguage;
    updateTextContent();
    changeTextDirection();
    footerUpdate();
    // console.log(currentLocal);
    
    //document.documentElement.style.setProperty('--footer-background', 'url("./src/components/images/footerAR.png")');
    // if (currentLocal==="en") {
    //     logoElement.textContent = locales.en.logo;
    //     homeLink.textContent = locales.en.nav01;
    // } else {
    //     logoElement.textContent = locales.ru.logo;
    //     homeLink.textContent = locales.ru.nav01;
    // }
       
    // console.log(currentLocal);
  }


// const logoElement = document.querySelectorAll("[data-i18n]")[0];
// const homeLink = document.querySelectorAll("[data-i18n]")[1];
// console.log(changeLocalToEN);
// console.log(currentLocal);

const changeLocalToEN = document.getElementById("c2a-EN") as HTMLElement;
changeLocalToEN.addEventListener("click", () => localUpdate("en"));
const changeLocalToAR = document.getElementById("c2a-AR") as HTMLElement;
changeLocalToAR.addEventListener("click", () => localUpdate("ar"));

localUpdate("en");

function initApp() {
}

document.addEventListener("DOMContentLoaded", () => {
    // start to build our page
    initApp();
});
