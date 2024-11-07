/**Export a function/class than handles creating of a DOM structure for Image component. 
 * Image src link must be created by combining a path to src/assets/images folder 
 * and an image file name (each card has its own in src/db/cards.json) */

 /*Экспортируйте функцию/класс, который обрабатывает создание структуры DOM для компонента Image. 
 Ссылка на источник изображения должна быть создана путем объединения пути к папке src/assets/images 
 и имени файла изображения (каждая карта имеет свой собственный файл в src/db/cards.json) */


 export function ImageConstructor(imageSource: string, imageInfo: Object):HTMLElement {
    let image = document.createElement("img");

    // img.src = new URL(`../assets/images/`+props.image.name, import.meta.url).href;

    image.src = new URL(imageSource + imageInfo.name, import.meta.url).href;
    image.alt = imageInfo.alt;
    return image;
 }