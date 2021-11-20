// const sayi1 = 4;
// const sayi2 = 7;
// let result = 0;
// //toplama
// result = sayi1 + sayi2;
// result = sayi1 - sayi2;
// result = sayi1 * sayi2;
// result = sayi1 / sayi2;
// result = sayi1 ** sayi2;
// result = sayi1 % sayi2;
// result = sayi2 % sayi1;
const t = "r";
const u = 100;
let rate;

if (t === "r") {
  if (u <= 200) {
    rate = 0.8;
  } else {
    rate = 0.7;
  }
} else {
  if (u <= 200) {
    rate = 0.6;
  } else {
    rate = 0.3;
  }
}

console.log(rate);
