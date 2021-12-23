// function addition(a, b, c) {
//   return a + b + c;
// }
// console.log(addition(2, 2, 2));
/*Function yerine aşağıdaki ERROR FUNCTION ı kullanabilirim*/

// const addition = (a, b, c, d) => {
//   if (a > b) return c + d;
// };
// const add = (a, b) => a + b;

// console.log(add(2, 2));

// const numbers = [1, 2, 3, 4, 5];

// const result = numbers.map(function (number) {
//   return number * 2;
// });
// console.log(
//   result
// ); /* result isminde yeni bir array oluşturdu ve numbers arrayını değiştirmedi*/
// console.log(numbers);

/* map ve filterin in daha doğru kullanımı error function la aşağıdaki gibi. map ve filter for gibi arrayin içerisinde geziyor*/
// const result = numbers.map((number) => number * 2);

// const result = numbers.filter((number) => number % 2 !== 0);
// const result = numbers.find((number) => number > 2);
/* arrayi gezmeye başlıyor ama ilk bulduğu elemanı gösterip duruyor*/

// const numbers = [1, 2, 3, 4, 5, 6];
// const result = numbers.map((number) => Math.pow(number, 2));
// console.log(result);
// const numberstek = result.filter((tek) => tek % 2 !== 0);

// console.log(numberstek);

// const personalData = [
//   ["Mehmet", ["Sekeroglu"]],
//   ["Hakan", "Türkoglu"],
//   ["Ali", "Saymaz"],
//   ["Hüsniye", "Sekeroglu"],
// ];

// const result = personalData
//   .map((name) => name.join(" "))
//   .filter((person) => person.includes("Sekeroglu"));
// console.log(result);

const numbers = [1, 2, 3, 4, 5];

const result = numbers.reduce(
  (a, b) => a * b
); /* çalışma şekli => a = 1, b = 2, sonra a*b= 2, a = 2, b = 3 sonra a*b=6 ..... */

console.log(result);
console.log(numbers);
