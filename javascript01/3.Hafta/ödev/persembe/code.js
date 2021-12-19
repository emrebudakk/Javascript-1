let s1 = prompt("1. sayı");
console.log(s1);
let s2 = prompt("2. sayı");
console.log(s2);
let s3 = prompt("3. sayi");
console.log(s3);

sonuc = bul(s1, s2, s3);
document.write("Girdigin 3 sayinin en buyugu " + sonuc + " sayisidir");
console.log("Girdigin 3 sayinin en buyugu " + sonuc + " sayisidir");

function bul(s1, s2, s3) {
  let enbuyuksayi = s1;

  if (enbuyuksayi < s2) {
    enbuyuksayi = s2;
  }
  if (enbuyuksayi < s3) {
    enbuyuksayi = s3;
  }
  return enbuyuksayi;
}
