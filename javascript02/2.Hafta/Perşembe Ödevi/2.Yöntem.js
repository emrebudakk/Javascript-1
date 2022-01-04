// INPUT
const animals = [
  "Monkey",
  "Cock",
  "Dog",
  "Boar",
  "Rat",
  "Ox",
  "Tiger",
  "Rabbit",
  "Dragon",
  "Snake",
  "Horse",
  "Sheep",
];
const elements = [
  "Metal",
  "Metal",
  "Water",
  "Water",
  "Wood",
  "Wood",
  "Fire",
  "Fire",
  "Earth",
  "Earth",
];
const birthyear = 1990;
// Definitionen
function getAnimal(pbirthyear) {
  return animals[pbirthyear % 12];
}
function getElement(pbirthyear) {
  return elements[pbirthyear % 10];
}
// Aufruf
let animal = getAnimal(birthyear);
let elm = getElement(birthyear);
// Output
console.log("Burcunuz: ", animal, elm);
