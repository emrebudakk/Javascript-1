//1. soru : 3 ve 5 e bölünebilen 100den kücük sayılar

// let toplam = 0;
// for (let sayac = 1; sayac <  101; sayac++) {
//   if (sayac % 3 == 0) {
//     toplam += sayac;
//     console.log(sayac, "biz");
//   }

//   if (sayac % 5 == 0) {
//     toplam += sayac;
//     console.log(sayac, "ciz");
//   }

//   if (sayac % 3 == 0 && sayac % 5 == 0) {
//     toplam += sayac;
//     console.log(sayac + "cizbiz");
//   }
// }

// 2. soru : Asagidaki sekli programlama yapılarını kullanarak çizdiriniz.

// *
// **
// ***
// ****
// *****
// let yildizString = "*";
// console.log(yildizString.repeat(0));
// console.log(yildizString.repeat(1));
// console.log(yildizString.repeat(2));
// console.log(yildizString.repeat(3));
// console.log(yildizString.repeat(4));
// console.log(yildizString.repeat(5));

// for (let index = 0; index < 20; index++) {
//   console.log(yildizString.repeat(index));
// }

// 3. soru : 0 dan 100 e kadar olan prime (asal sayilari) yazdirin (Asal sayilar: sadece kendisine ve 1 e bolunebilen sayilar) bulunmasi gereken sonuc: 1, 2, 3, 5, 7, 11 ....
// bir asal sayi nasil bulunur
// bir asal sayi bir ve kendisine bolunebilen sayidir
// bir asal sayi ikiden itibaren kendisine
// kadar bolunememelidir.
// for (let mainIndex = 2; mainIndex < 101; mainIndex++) {
//   const primeNumber = mainIndex;
//   let dividable = false;

/*bu for dongusu, asal sayi adayi sayiyi 2'den kendisine kadar bolme yontemiyle
  sayinin asal sayi olup olmadigini anlamaya calisir*/

//   for (let index = 2; index < primeNumber; index++) {
//     if (primeNumber % index == 0) {
//       dividable = true;
//     }
//   }

//   if (dividable == false) {
//     console.log(primeNumber, "is a prime number");
//   } else {
//     console.log(primeNumber, "is NOT a prime number");
//   }
// }

// 4. soru : Ostim sanayideki Cabbar Ustamizin uzmanlik alani, belli araba modellerini kapsamaktadir. Bundan dolayi Cabbar Usta online arac kabul sistemi icin bizden bir program istemektedir.

// Bu program asagidaki durumlari kontrol edebilmelidir.
// 1. Cabbar Usta sadece kirmizi ve siyah arabalari tamir etmektedir.
// 2. Sadece BMW, Audi ve VW markalarini kabul etmektedir.
// 3. BMW arabalarinda sadece kirmizi olanlari ve yas araligi 2010 ile 2019 arasindakileri kabul etmektedir.
// 4. Audi de ise sadece yas araligi 2005 ile 2010 veya 2014 ile 2020 arasindakileri kabul etmektedir.
// 5. VW de ise sadece siyah olanlari ve yas araligi 2001 ile 2018 arasindakileri kabul etmektedir.
// 6. Bu seneden itibaren de Cabbar Usta, 2020 cikisli siyah renkli BMWleri de kabul etmektedir.
// 7. 5 yildan uzun sureli sabit musterilerine ise, tum araba modellerinde (tum yas araligi ve tüm renkler) hizmet vermektedir.

let customerRank = 3; //Kac Yillik Müsteri
let brand = "Audi"; //Otomobil Markasi
let color = "Siyah"; //Otomobil Rengi
let model = 2021; //Otomobil Model Yili

if (customerRank >= 5) {
  console.log("Kaputu Ac Abi!");
} else if (
  (brand === "BMW" && color === "Kirmizi" && model >= 2010 && model <= 2019) ||
  (color === "Siyah" && model === 2020)
) {
  console.log("Kaputu Ac Abi!");
} else if (
  brand === "Audi" &&
  (color === "Kirmizi" || color === "Siyah") &&
  ((model <= 2010 && model >= 2005) || (model >= 2014 && model <= 2020))
) {
  console.log("Kaputu Ac Abi!");
} else if (
  brand === "VW" &&
  color === "Siyah" &&
  model <= 2018 &&
  model >= 2001
) {
  console.log("Kaputu Ac Abi!");
} else {
  console.log("Biz Bakmiyoruz, Ali Usta Baksin!");
}
