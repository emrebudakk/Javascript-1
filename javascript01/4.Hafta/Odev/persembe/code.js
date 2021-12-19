/*
Array icindeki sayilarin matematiksel islemleri:
1- karekokleri,
2- kareleri,
3- tum sayilarin toplami,
4- ortalamasi,
5- en büyük sayi
6- en kücük sayi
*/

let sayi1 = parseInt(
  prompt("Lütfen 1. sayiyi girin!")
); /* "parselInt" ile prompt yoluyla kullanicidan aldigim stringi sayiya cevirdim*/
let sayi2 = parseInt(prompt("Lütfen 2. sayiyi girin!"));
let sayi3 = parseInt(prompt("Lütfen 3. sayiyi girin!"));
let sayi4 = parseInt(prompt("Lütfen 4. sayiyi girin!"));
let sayi5 = parseInt(prompt("Lütfen 5. sayiyi girin!"));
let sayi6 = parseInt(prompt("Lütfen 6. sayiyi girin!"));
let sayi7 = parseInt(prompt("Lütfen 7. sayiyi girin!"));
let sayi8 = parseInt(prompt("Lütfen 8. sayiyi girin!"));
let sayi9 = parseInt(prompt("Lütfen 9. sayiyi girin!"));
let sayi10 = parseInt(prompt("Lütfen 10. sayiyi girin!"));

let numbers = [
  sayi1,
  sayi2,
  sayi3,
  sayi4,
  sayi5,
  sayi6,
  sayi7,
  sayi8,
  sayi9,
  sayi10,
];

// let numbers = [5, 15, 24, 32, 48, 50, 66, 74, 85, 93];

// eleman sayisi
console.log(numbers.length);

// elemanlar
console.log(numbers);

// 1-karekokunu bulma
let karekok = numbers.map((x) => Math.sqrt(x));
console.log(
  "Dizideki sayilarin karekoku => " + numbers.map((x) => Math.sqrt(x))
);

// 2-karesini hesaplama
let kare = numbers.map((x) => Math.pow(x, 2));
console.log(
  "Dizideki sayilarin kareleri => " + numbers.map((x) => Math.pow(x, 2))
);

// 3-tum sayilarin toplami
let total = 0;
for (let sayac = 0; sayac < numbers.length; sayac++) {
  let number = numbers[sayac];
  total = total + number;
}
console.log(total);

//4-sayilarin ortalamasi
console.log(total / numbers.length);

//5-en kucuk sayi
// console.log(Math.min(numbers));
let min = numbers[0];
let max = numbers[0];
for (let sayac = 0; sayac < numbers.length; sayac++) {
  if (min > numbers[sayac]) min = numbers[sayac]; //Aynı şekilde min'den küçük bir eleman var ise yeni min o olacak.
  if (max < numbers[sayac]) max = numbers[sayac]; // Eğer dizinin herhangi bir elemanı max'tan büyükse yeni max o olacak.
}
console.log("Dizideki en küçük eleman " + min);

//6- en buyuk sayi
console.log("Dizideki en büyük elemenan " + max);
