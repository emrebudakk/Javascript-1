// 0 - 100 arası çift sayılar (düzeltmek gerekiyor)
// let nummer = 0;
// while (let nummer < 100; sayac = nummer + 2) {
//   let sayac += nummer;
//   console.log(sayac);
// }

//hem 3 hem 5 bölünebilen sayılar
// let toplam = 0;
// for (let nummer = 1; nummer < 100; nummer++) {
//   if (nummer % 3 == 0 && nummer % 5 == 0) {
//     toplam += nummer;
//     console.log(nummer);
//   }
// }

//Array kullanarak ilk son ve ortadaki sayıları yazdırma
// const sayilar = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(sayilar[0]);
// console.log(sayilar[4]);
// console.log(sayilar[8]);

//farkli bir yontem
const sayilar = [11, 22, 33, 14, 15, 56, 67, 98, 9];
console.log("Array (sayilar) size: ", sayilar.length);

const first_number = 0;
const length = sayilar.length;

console.log("first_number", sayilar[first_number]);
console.log("middle one: ", sayilar[middleIndex]);
console.log("last number", sayilar[length - 1]);

let mayStringArray = ["hello", "world", "Merhaba", "Hoi"];
