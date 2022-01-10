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

// const numbers = [1, 2, 3, 4, 5];

// const result = numbers.reduce(
//   (a, b) => a * b
// ); /* çalışma şekli => a = 1, b = 2, sonra a*b= 2, a = 2, b = 3 sonra a*b=6 ..... */

// console.log(result);
// console.log(numbers);
/* Error Function*/
// function sum(pFirstNumber, pSecondNumber) {
//   return pFirstNumber + pSecondNumber;
// }

/* function yerine error function la yaparsak*/
// const sum = (pFirstNumber, pSecondNumber) => pFirstNumber + pSecondNumber;

/* eğer birden fazla satır varsa*/
// function hypo(pFirstEdge, pSecondEdge) {
//   const sumSqr = pFirstEdge ** 2 + pSecondEdge ** 2;
//   const result = Math.sqrt(sumSqr);
//   return result;
// }

/*Error Function ile yazılmış hali*/
// const assert(hypo(3,4)==5)

// console.assert(21, 3 + "ooo güzel çalışıyor");

/* setIntervial(fn.sayi)
fn çalıştırılacak fonksiyon
syai milisaniye cinsinden fonksiyonun hangi zaman aralığında çağrılacağını belirtir
*/
// function saniyedeBirCagrilacakFonksiyon() {
//   console.log("her bir saniyede bu fonksiyonu göster");
// }

// setInterval(saniyedeBirCagrilacakFonksiyon, 1000); /*1000ms = 1 sn*/
/*Error Function ile yazılmış hali*/
// setInterval(() => {
//   console.log("her bir saniyede bu fonksiyonu göster");
// }, 1000);

// const names = ["mustafa", "Hasan", "Ferhat"];

// const filteredArr = names.filter((name) => name.length > 5);

// console.log("filtered Arr = " + filteredArr);

// const fruitList = [
//   "Elma",
//   "Üzüm",
//   "Avakado",
//   "İncir",
//   "Mandalina",
//   "iğde",
//   "kiwi",
//   "Kiraz",
//   "Portakal",
//   "Mango",
//   "muz",
//   "Hurma",
// ];

// /*içinde i harfi geçen ve uzunluğu 4 ten büyük olan meyveler*/
// const sevdigimMeyveler = fruitList
//   .filter((fruit) => fruit.includes("i"))
//   /*içinde "i" geçen elemanları buldum*/
//   .filter((fruit) => fruit.length > 4)
//   /*içinde "i" geçen 4 harften büyük olan elemanları buldum*/
//   .map((fruit) => fruit[0])
//   /*içinde "i" geçen 4 harften büyük olan elemanların 1. elemanlarını buldum*/
//   .map((letter) => letter.toUpperCase());
// /*içinde "i" geçen 4 harften büyük olan elemanların 1. elemanlarını büyük harf yaptım*/
// console.log("en sevdiğim meyveler" + sevdigimMeyveler);

/*Objeler*/
/*
const car = [
  { type: "Fiat", model: "500", color: "white" }, // keys olanlar => Type , model, color(.nokta ile keylere ulaşabiliyoruz)
  { type: "Renault ", model: "Scenic", color: "blue" }, // value olanlar => Fiat, 500, Scenic, red vs
  { type: "Ford", model: "Focus", color: "red" },
];
console.log(car[0].type);

let typeCar = car.map((c) => c.type);
console.log(typeCar);
*/
// const groupList = ["Rangers", "Raiders", "Wilds", "Canaries", "Bears"];
// const personalList = [
//   "Bowie",
//   "Boyd",
//   "Aaron-James",
//   "Aarron",
//   "Aaryan",
//   "Aaryn",
//   "Conner",
//   "Connolly",
//   "Fauzaan",
//   "Favour",
//   "Fawaz",
//   "Fawkes",
//   "Connor",
//   "Aayan",
//   "Bracken",
//   "Brad",
// ];
// /*Arrayleri Object e çevirme*/
// const mactPersonAndGroup = (pPersonalList, pGroupList) => {
//   pGroupList.map((group) => {
//     pPersonalList.map((person) => {
//       let card = { group: group, person: person };
//       matchedList.push(card);
//     });
//   });
//   return matchedList;
// };

// const shuffleList = (pList) => pList.sort(() => Math.random() - 0.5);
// const matchedList = mactPersonAndGroup(personalList, groupList);
// const shuffledList = shuffleList(matchedList);

// const getFiveElement = () => {
//   for (let index = 0; index < 5; index++) {
//     console.log(shuffledList[index].group + shuffledList[index].person);
//   }
// };

// const data = [
//   {
//     id: 1,
//     name: "Uthappizza",
//     image: "/assets/images/uthappizza.png",
//     category: "mains",
//     featured: true,
//     label: "Hot",
//     price: "4.99",
//     description:
//       "A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.",
//     comments: [
//       {
//         rating: 5,
//         comment: "Imagine all the eatables, living in conFusion!",
//         author: "John Lemon",
//         date: "2012-10-16T17:57:28.556094Z",
//       },
//     ],
//   },
//   {
//     id: 2,
//     name: "Zucchipakoda",
//     image: "/assets/images/zucchipakoda.png",
//     category: "appetizer",
//     featured: false,
//     label: "",
//     price: "1.99",
//     description:
//       "Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce",
//     comments: [
//       {
//         rating: 4,
//         comment:
//           "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
//         author: "Paul McVites",
//         date: "2014-09-05T17:57:28.556094Z",
//       },
//     ],
//   },
//   {
//     id: 3,
//     name: "Vadonut",
//     image: "/assets/images/vadonut.png",
//     category: "appetizer",
//     featured: false,
//     label: "New",
//     price: "1.99",
//     description:
//       "A quintessential ConFusion experience, is it a vada or is it a donut?",
//     comments: [
//       {
//         rating: 3,
//         comment: "Eat it, just eat it!",
//         author: "Michael Jaikishan",
//         date: "2015-02-13T17:57:28.556094Z",
//       },
//     ],
//   },
//   {
//     id: 4,
//     name: "ElaiCheese Cake",
//     image: "/assets/images/elaicheesecake.png",
//     category: "dessert",
//     featured: false,
//     label: "",
//     price: "2.99",
//     description:
//       "A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms",
//     comments: [
//       {
//         rating: 4,
//         comment: "Ultimate, Reaching for the stars!",
//         author: "Ringo Starry",
//         date: "2013-12-02T17:57:28.556094Z",
//       },
//       {
//         rating: 2,
//         comment: "It's your birthday, we're gonna party!",
//         author: "25 Cent",
//         date: "2011-12-02T17:57:28.556094Z",
//       },
//     ],
//   },
// ];
// let dataComment = data.map((value) => {
//   return value.comments.map((comment) => comment.comment);
// });

// console.log(dataComment.flat().join("\n"));

/*Objelere Örnekler Cumartesi ders
const person = {
  firstName: "Tomas",
  lastName: "Meier",
  age: 36,
  salary: 112000.0,
  isMaried: false,
  children: ["Mijam", "Hannes", "Jürg"],
  adress: {
    street: "Musterstr. 3",
    zipCode: "6785",
    city: "Zurich",
    country: "Switzerland",
  },
  hasChildren() {
    return this.children !== null && this.children.length > 0;
  },
};

console.log(person.salary); // 112000.0

console.log(person.children[1]); // Hannes

console.log(person.hasChildren());

const personList = [
  {
    firstName: "Joey",
    lastName: "Tribiani",
    age: 29,
    salary: 2000.0,
  },
  {
    firstName: "Ross",
    lastName: "Geller",
    age: 30,
    salary: 56000.0,
  },
  {
    firstName: "Rachel",
    lastName: "Green",
    age: 29,
    salary: 48000.0,
  },
];

const highPersonList = personList.filter((person) => person.salary > 50000);
const highAgePersonList = personList
  .filter((age) => age.age >= 30)
  .map((firstname) => firstname.firstName);

console.log(highAgePersonList); //[ 'Ross' ]
*/
