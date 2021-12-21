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

let autolist = [
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
/*
1. Adım: dizideki elemanların herbirine ayrı ayrı işlem yapabilmek için
string olarak dışarı çıkarma
*/
let autoString1 = autolist.join(",").toUpperCase();
// console.log(autoString1);
let autoString2 = autolist.join(" ").toUpperCase();
// console.log(autoString2);
let autoString3 = [destroyingNumbers().join(",")];
// console.log("autoString3 => " + autoString3);
let autoString4 = reversalText().split(/,/);
// console.log("autoString4 => " + autoString4);
let autoString5 = addText().toString().split(/,/);
// console.log("autoString5=> " + autoString5.length);

/*
2. Adım: Stringleri büyük harfe çevirerek tekrar Arraya dönüştürme
*/
function bigConvert() {
  return autoString1.split(/,/);
}
console.log("Büyük Harfe çevrildi => " + bigConvert());

/*
3. Adım: Parca isimlerinden sayiları cikartma
*/
function destroyingNumbers() {
  return autoString1.replace(/[0-9]/g, "").split(/,/);
}
console.log("Tüm sayılar çıkarıldı => " + destroyingNumbers());

/*
4. Adım: Parca isimlerini tersine cevrirme
*/
function reversalText() {
  return autoString3.toString().split("").reverse().join("");
}
console.log("Tüm kelimeler tersine çevrildi => " + reversalText());

/*
5. Adım: Her parcanin basina KEREMAG_ eklendi
*/
function addText() {
  for (let index = 0; index < autoString4.length; index++) {
    autoString4[index] = "KEREMAG_" + autoString4[index];
  }
  return autoString4;
}
console.log("KEREMAG_ eklendi => " + addText());

/*
6. Adım: Her parcanin sonuna date eklendi
*/
function addDate() {
  const d = new Date();
  let dates = d.toUTCString();

  for (let index = 0; index < autoString5.length; index++) {
    autoString5[index] = autoString5[index] + "(" + dates + ")";
  }
  return autoString5;
}
console.log("Date eklendi => " + addDate());
