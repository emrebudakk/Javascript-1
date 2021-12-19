// const message = "Hallo!";

// function showMessage(pMessage) {
//   alert(pMessage);
// }
// showMessage(alert);

// const messages = ["Günaydın", "Merhaba", "İyi akşamlar", "Tünaydın"];

// function showMessages(pList) {
//   pList.forEach((element) => {
//     alert(element);
//   });
// }
// showMessage(messages);

//Arraylari ters çevirme
// const sayilar = ["1", "2", "3", "4"];
// let sayilar1 = sayilar.reverse();
// console.log(sayilar1);

// Numberleri ters cevirme
// const kume = 1234;
// const result = Number(kume.toString().split("").reverse().join(""));
// console.log(result);

// function reverseNumber(pNumber) {
//   return pNumber.toString().split("").reverse().join("");
// }
// reverseNumber(kume);
// console.log(reverseNumber(kume));
// console.log(
//   reverseNumber(789)
// ); /* Kurduğumuz fonksiyonla fonksiyonu kullanarak her sayıyı tersine çevirebiliriz */

//"HiCoders" kelime stringini harf sırasına göre yazma
// let kelime = "HiCoders";
// const result = String(kelime.toLowerCase().split("").sort().join(""));
// console.log(result);

// function reverseText(pKelime) {
//   return pKelime.toLowerCase().split("").sort().join("");
// }
// console.log(reverseText(kelime));
// console.log(reverseText("Ismail"));

//Sesli harfleri bulma
// let kelime = "HiCoders";
// let sesliharfler = "aeiou";
// let result1 = kelime.toLowerCase().split("");
// let result2 = sesliharfler.toLowerCase().split("");
// let ortak = [];
// console.log(result1);
// console.log(result2);

// for (let a = 0; a < result1.length; a++) {
//   for (let b = 0; b < result2.length; b++) {
//     if (result1[a] === result2[b]) {
//       ortak.push(
//         result1[a] /* result2[b] de yazabilirim. çünkü verdiği sonuç aynı */
//       );
//     }
//   }
// }
// console.log("Ortak olan harfler: " + ortak);
// console.log("Ortak olan harflerin sayısı: " + ortak.length);

// for (let a = 0; a < result1.length; a++) {
//   for (let b = 0; b < result2.length; b++) {
//     if (result1[a] === result2[b]) {
//       sonuclar.push(result1[a]);
//     }
//   }
// }

// //const ortak = result1.filter((x) => result2.includes(x));
// console.log(sonuclar);

const VOWEL = "aeio";
const word = "HiCoder";
const vowelsInWord = [];
/**
 * This function convert the string to an array.
 * @param {string} pText
 * @returns
 */
function convertStringToArray(pText) {
  return pText.toLowerCase().split("");
}
/**
 * This function find vowel character in the text.
 * @param {string} pText
 * @returns
 */
function findVowelChar(pText) {
  let charList = convertStringToArray(pText);
  charList.forEach((element) => {
    if (VOWEL.includes(element)) {
      vowelsInWord.push(element);
    }
  });
  return vowelsInWord;
}
/**
 * This function count vowel character in the text.
 * @param {string} pText
 * @returns
 */
function countVowelChar(pText) {
  let count = 0;
  let charList = convertStringToArray(pText);
  charList.forEach((element) => {
    if (VOWEL.includes(element)) {
      count++;
    }
  });
  return count;
}
/**
 * This function show the result.
 * @param {string} pText
 */
function showResult(pText) {
  console.log(`Kelimede bulunan sesli harfler : ${findVowelChar(pText)}`);
  console.log(`Kelimede bulunan sesli harf sayisi : ${countVowelChar(pText)}`);
}
showResult(word);
