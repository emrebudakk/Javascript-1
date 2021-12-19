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
let sum = 0;
function footCalculate() {
  for (let index = 0; index <= animallist.length; index++) {
    const letter = animallist[index];
    if (animallist[index] === "domuz") {
      continue;
    } else if (animallist[index] === "tavuk") {
      sum += 2;
    } else if (animallist[index] === "inek" || animallist[index] === "koyun") {
      sum += 4;
    }
  }
  return "toplam ayak sayısı: " + sum;
}
console.log(footCalculate());
