/*
1. Adım: Dizideki elemanların herbirine ayrı ayrı işlem yapabilmek için
string olarak dışarı çıkarma
2. Adım: Parca isimleri büyük harflere cevrilecektir.
3. Adım: Parca isimlerinden sayilar cikartilacaktir.
4. Adım: Parca isimleri tersine cevrilecektir.
5. Adım: Her parcanin basina KEREMAG_ eklenecektir.
6. Adım: Her parcanin sonuna ise parcanin sisteme girildigi tarih eklenecektir.
(Date nesnesini kullanarak tarih ve saat konulmasi yeterlidir)
*/

/*
1. Adım: Array ve Değişkenleri oluşturma
*/
const autoProduct = [
  "Kaporta5",
  "Ak3ü",
  "Stop Lambasi",
  "Radyatör 21",
  "Karbüratör 42",
  "Tekerlek",
  "3 AYNA",
  "Jant",
  "Direksiyon16",
];

const d = new Date();
const dates = d.toUTCString();
function bigConvert() {
  const newAutoProduct = autoProduct
    .map((product) => product.toUpperCase())
    .map((delNumber) => delNumber.replace(/[0-9]/g, ""))
    .map((product) => product.split("").reverse().join(""))
    .map((product) => "KEREMAG_" + product)
    .map((product) => product + "(" + dates + ")");
  return newAutoProduct;
}

console.log("Yedek Parcaci Keremin yeni listesi => " + bigConvert());

// const d = new Date();
// const dates = d.toUTCString();
/*
2. Adım: Stringleri büyük harfe çevirme
*/

// const bigConvert = autoProduct.map((product) => product.toUpperCase());
// console.log("Stringler büyük harfe çevrildi => " + bigConvert);

// /*
// 3. Adım: Parca isimlerinden sayiları cikartma
// */
// const destroyingNumbers = bigConvert.map((product) =>
//   product.replace(/[0-9]/g, "")
// );
// console.log("Parca isimlerinden sayilar çıkarıldı => " + destroyingNumbers);
// /*
// 4. Adım: Parca isimlerini tersine cevrirme
// */
// const reversalText = destroyingNumbers.map((product) =>
//   product.split("").reverse().join("")
// );
// console.log("Parca isimlerini tersine çevrildi => " + reversalText);
// /*
// 5. Adım: Her parcanin basina KEREMAG_ ekleme
// */
// const addText = reversalText.map((product) => "KEREMAG_" + product);
// console.log("Her parcanin basina KEREMAG_ eklendi => " + addText);
// /*
// 6. Adım: Her parcanin sonuna date ekleme
// */
// const addDate = addText.map((product) => product + "(" + dates + ")");
// console.log("Her parcanin sonuna Date eklendi => " + addDate);
