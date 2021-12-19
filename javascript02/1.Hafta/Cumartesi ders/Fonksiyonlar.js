/*Örnek 1*/
//let levelValue = 100;
// let scoreValue = 200;

// function addScore(level, score) {
//   let bonus = level * score * 0.1;
//   return score + level;
// }
// let scoreResult = addScore(levelValue, scoreValue);
// console.log(scoreResult);

// let deg1 = addScore(10, 15);
// console.log(deg1);

//örnek 2: Kullanıcıya mesaj gönderme
let kullaniciAdi = prompt("Lutfen adınızı yazınız");
function mesajGoster(gonderen, metin) {
  alert(gonderen + " " + metin);
}
mesajGoster(kullaniciAdi + " sayfamıza hoşgeldiniz");
// mesajGoster("Ahmet", "Sayfamıza Hoşgeldin");

/* Örnek bitmeyen : 2 sayıyı toplama*/
// function sum(a, b) {
//   let result = a + b;
// }
// let toplam1 = sum(4, 5);
// let toplam2 = sum(6, 7);

// let k1 = Number(k1);
// let k2 = Number(k2);
// function calculateHipotens(a, b) {
//   let hipotenus = Math.sqrt(k1 * k1 + k2 * k2);
//   return hypotenuse;
// }

// let result = calculateHypotenuse(3, 4);
// console.log("result of hypotenuse calculation:", result);

/* Örnek 4 : kare ise veya daire ise alanını hesaplama */
// function alaniBul(sekil, kenar) {
//   if (sekil == "kare") {
//     const alanKare = kenar * kenar;
//     return alanKare;
//   }
//   if (sekil == "daire") {
//     const alanDaire = Math.PI * kenar * kenar;
//     return alanDaire;
//   }
// }

// const alanKare1 = alaniBul("kare", 6);
// const alanDaire1 = alaniBul("daire", 5);

// let result = alaniBul("daire", 5);
// test the result value, whether the function is working correctly
// console.assert(
//   result == Math.PI * Math.pow(5, 2),
//   "Nooooo! The result is totally wrong"
// );
// console.log(result);

// result = alaniBul("kare", 6);
// console.assert(result == 36, "Nooooo! The result is totally wrong");
// console.log(result);
