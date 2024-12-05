import { innerHTML } from './innerHTML';
import locales from './locales.json' 

console.log(innerHTML);

let currentLocal: "en" | "ar" = "en";

function changeLocale() {
    currentLocal = currentLocal === "en"? "ar" : "en";
}


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

}

const myPage = document.createElement("section");
myPage.innerHTML=innerHTML;
document.body.append(myPage);

const changeLocalToEN = document.getElementById("c2a-EN") as HTMLElement;
changeLocalToEN.addEventListener("click", () => localUpdate("en"));
const changeLocalToAR = document.getElementById("c2a-AR") as HTMLElement;
changeLocalToAR.addEventListener("click", () => localUpdate("ar"));

localUpdate("en");

function initApp() {
    return new Promise((resolve) => {
        setTimeout(() => {
          resolve(locales[currentLocal]); 
        }, 1000); 
      });
}

document.addEventListener("DOMContentLoaded", () => {
    // start to build our page
    initApp();
});
