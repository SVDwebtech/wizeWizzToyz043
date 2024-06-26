const { name } = require("ejs");

// let name = "Schalk";
// let surname = "van Dyk";

const namesArrayNr1 = ["Schalk", "Johan", "James", "Wynand", "Natan"];
const namesArrayNr2 = ["Jennifer", "Anna", "Kelly", "Cloe", "Jessy"];

for(let name of namesArrayNr1) {
      console.log(name);
};
console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
const allNames = namesArrayNr1.concat(namesArrayNr2);
for(let name of allNames) {
      console.log(name);
}