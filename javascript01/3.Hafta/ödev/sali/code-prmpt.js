let s1 = prompt("1. sayı");
let s2 = prompt("2. sayı");

sonuc = bul(s1, s2);
document.write("Girdigin sayilarin en buyugu " + sonuc + " sayisidir");

function bul(s1, s2) {
  let enbuyuksayi;

  if (s1 > s2) {
    enbuyuksayi = s1;
    console.log(s1);
  } else {
    enbuyuksayi = s2;
    console.log(s2);
  }

  return enbuyuksayi;
}
