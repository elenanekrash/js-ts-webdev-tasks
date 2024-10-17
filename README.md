# Hometask HTML, CSS, JS DOM API

Your task is to develop a webpage according to the provided Figma design. In Figma navigate to `Pages -> Showcase -> showcase_9`.

Figma design link: https://www.figma.com/design/AJqg3a4WEZ2MHKzZZcl5FY/Free-Figma-Website-Landing-Pages---Startup-App-(Community)-(Copy)?node-id=0-3825&node-type=canvas&t=kZ1GJwCxy7ZAQKWl-0

## Requirements

- Usage of Vite https://vite.dev/guide/
- Usage of TypeScript 5 https://www.typescriptlang.org/download/
- Only one `index.html` file is allowded for all HTML code
- Only one `src/style.css` file is allowded for all CSS code
- Only one `src/main.ts` file is allowded for the initial source code. Inside there must be source code to import and connect all components and render page. If you need more components/files, you are free to create but please be ready to explain the reasons.
- Put all images and fonts downloaded from Figma into a folder named `src/assets` (`src/assets/images` or `src/assets/fonts`)
  - optional: fonts could be imported from google fonts in CSS file without downloading
- No frameworks/libriares allowded

## Database

A file `src/db/cards.json` store data that you must load into your app to be able to render the page. Here's a hint how to work with json files in Vite https://vite.dev/guide/features.html#json

You are free to change the structure of the data. However all the data that is displayed in Figma must be displayed on your final webpage.

### Components

There are 3 required components, source code for each of them must be located into a separate TS file

#### Card

Export a function/class that handles creating of a DOM structure for Card component. It has heading, description, image and tags (blue text splitted by the comma)

#### Image

Export a function/class than handles creating of a DOM structure for Image component. Image src link must be created by combining a path to `src/assets/images` folder and an image file name (each card has its own in `src/db/cards.json`)

How to work with images and urls in Vite https://vite.dev/guide/assets.html#new-url-url-import-meta-url

#### Tags

Export a function/class that handles creating of a DOM structure for the list of tags components. Each tag is text with blue color. Tags are displayed in a row. Each tag is divided by a comma from a previous tags

## Evaluation criterias - max 10 points

- Usage of Vite - 1 point
- Usage of TypeScript - 1 point
- Usage of downloaded assets (images, fonts) - 1 point
- Usage of TS functions to create components - 1 point
- Usage of json array of objects as a Database - 1 point
- Create and use Card component - 1 point
- Create and use Image component - 1 point
- Create and use Tags component - 1 point
- Creat a page according to the provided Figma design - 2 points
