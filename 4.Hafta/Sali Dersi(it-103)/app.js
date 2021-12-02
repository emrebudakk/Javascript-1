/**
 * ARRAY METHODS
 *
 * pop()
 * push()
 * shift()
 * unshift()
 * sort()
 * reverse()
 * reduce()
 * split()
 * filter()
 * find()
 * indexOf()
 * lastIndexOf()
 * includes()
 * map()
 * foreach()
 * join()
 * slice()
 * some()
 * toString()
 * concat()
 * trim()
 */

/**
 * STRING METHODS
 *
 * slice()
 * substring()
 * substr()
 * replace()
 * concat()
 * charAt()
 * charCodeAt()
 * split()
 * trim()
 * toUpperCase()
 * toLowerCase()
 */

/**
 * SIRALAMA ALGORITMALARI
 *
 * Selection Sort
 * Insertion Sort
 * Shell Sort
 * Merge Sort
 * Quick Sort
 * Bubble Sort
 */

// let nameList = ["Hakki", "Ahmet", "Mehmet", "Ayse", "Zeynep", "Mehmet"];

// console.log(nameList[1]);
// console.log(nameList.length);

// nameList.push("Jale", "Hakki");
// console.log(nameList);

// console.log(nameList.shift());
// console.log(nameList);

// nameList.unshift("test");
// console.log(nameList);

// nameList.pop();
// console.log(nameList);

// let numberList = [4, 6, 1, 9, 0, 23];
// numberList.sort(function (a, b) {
//   return a - b;
// });
// console.log(numberList);

// let result = nameList.indexOf("mehmet");

// if (result == -1) {
//   console.log("Mehmet burada yok");
// } else {
//   console.log(nameList[1].toUpperCase());
// }

// let result = nameList.lastIndexOf("Mehmet");
// console.log(result);

// let result = nameList.includes("Mehmet");
// console.log(result);

// let nameList2 = ["Yusuf", "Bedir"];
// let newNameList = nameList.concat(nameList2);
// console.log(newNameList);

// console.log(nameList);
// console.log(nameList2);

// console.log(nameList.slice(1, 2));

// let newNameList = nameList.splice(1, 2);
// console.log(nameList);

// let nameListLength = nameList.length; // 1 kere

// for (let i = 0; i < nameListLength; i++) {
//   console.log(nameList[i].toUpperCase());
// }

// let fruit = "Apple";

// console.log(fruit.charAt(2));

// console.log(fruit.charCodeAt(4));

// console.log(fruit.replace("p", "x"));

// let myUrl = "üö-adanaü";

// let result = myUrl.indexOf("ü");

// if (result == -1) {
//   // ü harfi olmadigi icin bir islem yapmiyorum
// } else {
//   myUrl = myUrl.replace("ü", "u");
// }

// console.log(myUrl);
/**
 * break // donguden cikar
 * continue // sadece o sart icin islem yapilmaz
 * return
 */

let name1 = "Ahmet";
let name2 = "Ali";

document.getElementById("box").innerHTML = `
    <ul>
        <li><a href="">${name1}</a></li>
        <li><a href="">${name2}</a></li>
    </ul>
`;
