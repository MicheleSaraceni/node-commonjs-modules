const names = require("./names.js");
const hobbies = require("./hobbies.js");

console.log(names("Michele", "Saraceni"));
console.log(hobbies("GDR", "One Piece", "Amici"));

function person() {
    return {
        name: names("Michele", "Saraceni"),
        hobbie: hobbies("GDR", "One Piece", "Amici")
    }
}

console.log(person());