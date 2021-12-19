//1- 1 ile 10 arasındaki ÇİFT sayıları ekrana javascript kodları

// for (let sayac = 0; sayac <= 10; sayac++) {
//   if (sayac % 2 == 0) {
//     console.log(sayac + " => cift sayi");
//   } else {
//     console.log(sayac + " => tek sayi");
//   }
// }

// 2- 100 e kadar olan sayilardan 3 ve 5’e tam bölünen sayıları ve bu sayıların toplamını yazdıran javascript kodları
// let toplam = 0;
// for (let sayac = 0; sayac <= 100; sayac++) {
//   if (sayac % 3 == 0 && sayac % 5 == 0) {
//     toplam += sayac;
//     console.log(sayac + " => 3 ve 5'e bölünebiliyor");
//     console.log(
//       (toplam = toplam + sayac + " => 3 ve 5e bölünebilen sayıların toplamı")
//     );
//   }
// }

// 4- Ekrana
// *
// **
// ***
// **** şeklinde yıldızları yazdıran javascript kodları

// let string = "";
// for (let i = 1; i <= 5; i++) {
//   for (let j = 0; j < i; j++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

// 5- Kullanıcının girdiği mesajı yine kullanıcının girdiği
// tekrar sayısı kadar yazdıran javascript kodları
// let mesaj = prompt("Mesaj Girin");
// let sayi = prompt("Tekrar Sayısını Girin");
// for (let i = 0; i < parseInt(sayi); i++) {
//   document.write(mesaj + "<br/>  ");
//   console.log(mesaj);
// }

// 6 - 0-100 arasındaki sayıları yazdırmak için gerekli kodu yazınız.
// for (let sayac = 0; sayac < 101; sayac++) {
//   document.write(sayac + "<br/>  ");
// }

// 7 - 0-100 arasındaki çift sayıları ekrana yazdıran programı yapınız.
// let toplam = 0;
// for (let sayac = 0; sayac < 101; sayac++) {
//   if (sayac % 2 == 0) {
//     toplam += sayac;
//     document.write(sayac + " => Çift Sayı" + "<br/>  ");
//   } else {
//     document.write(sayac + "=> Tek Sayı" + "<br/>  ");
//   }
// }

// 8 - Gunler
// const days = ["M", "Tu", "W", "Tr", "F", "Sa", "Su"];
// for (let sayac = 0; sayac < days.length; sayac++) {
//   document.write(days[sayac] + "<br/>");
// }
