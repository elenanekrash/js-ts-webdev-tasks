/* Export a function/class that handles creating of a DOM structure for the list of tags components. 
Each tag is text with blue color. Tags are displayed in a row. Each tag is divided by a comma 
from a previous tags*/

export function TagsConstructor(tags: Array<Object>):string {
    let result = tags[0].title;
    for (let i=1; i<tags.length; i++) {
        result = result + ', ' + tags[i].title;
    }
    return result;
}