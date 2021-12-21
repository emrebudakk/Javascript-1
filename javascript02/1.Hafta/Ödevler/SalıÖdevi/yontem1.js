/*
1. Çiftçiden hayvan listesi alınır
2. Necip usta için iki ayaklı ve dört ayaklı helal hayvanlar listesi oluşturulur.
3. Çiftçinin listesiyle helal listesindeki hayvanlar karşılaştırılır ve 
   helal olan tüm hayvanlar tespit edilir.
4. iki ayaklı hayvanlar için .lenght*2
   dört ayaklı hayvanlar için .lenght*4 işlemleri yapılarak
   toplamları alınır.
*/
const animallist = [
  "inek",
  "tavuk",
  "domuz",
  "koyun",
  "koyun",
  "tavuk",
  "inek",
  "koyun",
  "inek",
  "tavuk",
  "domuz",
];
let result1 = [];
let result2 = [];
function footCalculate() {
  for (let index = 0; index <= animallist.length; index++) {
    if (
      !(
        animallist[index] === "domuz" ||
        animallist[index] === "tavuk" ||
        animallist[index] === " "
      )
    ) {
      result1.push(animallist[index]);
    } else if (animallist[index] === "tavuk") {
      result2.push(animallist[index]);
    }
  }
  console.log("result1 => " + result1);
  console.log("result1 => " + result1.length);
  console.log("result2 => " + result2);
  console.log("result1 => " + result2.length);
  return "toplam ayak sayısı: " + (result1.length * 4 + result2.length * 2);
}
console.log(footCalculate());
