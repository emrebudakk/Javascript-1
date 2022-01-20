/*bize 3 çeşit meyve önerecek program*/
const fruits = [
  "elma",
  "armut",
  "erik",
  "kiraz",
  "muz",
  "portakal",
  "havuc",
  "mango",
  "ejder meyvesi",
  "papaya",
  "mandalina",
  "greyfurt",
  "nar",
];
function getElement(pList, pSelectedList, pQuantity) {
  for (let index = 0; index < pList.length; index++) {
    let j = Math.floor(Math.random() * pList.length);
    let element = pList[j];
    if (
      pSelectedList.length < pQuantity &&
      pSelectedList.includes(element) === false
    ) {
      pSelectedList.push(element);
    }
  }
  return pSelectedList;
}
console.log(getElement(pList, pSelectedList, 3));
