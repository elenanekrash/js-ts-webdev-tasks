# Halloween Website

Implement **only three sections** (`hero`, `gallery` and `footer`) for both RTL and Enlish versions from design according [Figma Design](<https://www.figma.com/file/Z9i2HiOV3VtvhnqkKBUUon/Free-Halloween-Party-Time-Landing-Page-(Community)?type=design&node-id=0-1&mode=design&t=rp5neXS05UbP5lGk-0>)

## Requirements and scoring (maximum 10 points)

### General - 2 points

- Use Vite
- Use TypeScript
- Use HTML5
- Download assets from Figma, put inside `assets` folder and use in the project
  - if there is no any asset (like arabic fonts), replace with any font close to the missing one (https://fonts.google.com/) (there are filters for `Arabic` language fonts)

### Hero section - 2 point

- Implement all section (Header and Hero) using `template string and innerHTML` approach
  - Approach example https://jsfiddle.net/nL4zb58v/
  - Approach example https://github.com/School-of-Digital-Competencies/js-ts-webdev-lectures/blob/practice-21-10-2024-three-ways-working-with-dom-api/createElementWithTemplateString.js

### Gallery section - 2 point

- Implement all section (Halloween memories with images) using `document.createElement` approach
  - Approach example https://jsfiddle.net/Lt6sa2cp/
  - Approach example https://github.com/School-of-Digital-Competencies/js-ts-webdev-lectures/blob/practice-21-10-2024-three-ways-working-with-dom-api/createElementWithDocumentCreateElementAndAppend.js

### Footer section - 1 point

- Implement all section (Footer) using `cloneNode and template tag` approach
  - Approach example https://jsfiddle.net/4srewok9/2/
  - Approach example https://github.com/School-of-Digital-Competencies/js-ts-webdev-lectures/blob/practice-21-10-2024-three-ways-working-with-dom-api/createElementWithTemplateHTMLElementTag.js

### Localization - 3 points

- Add localization (two languages EN and AR)
  - For loading locales please add mock request to backend (promise and setTimeout)
- Support RTR/LTL versions (content from right to left for AR translation)
- Localization example https://jsfiddle.net/L8x3hn76/1/
- Localization example 2 https://github.com/School-of-Digital-Competencies/js-ts-webdev-lectures/blob/lecture-24-10-2024-css-module-router/src/main.ts
