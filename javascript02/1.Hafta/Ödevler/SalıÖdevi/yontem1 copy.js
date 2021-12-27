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
const animalsWithoutChicken = animallist.filter(function (animal) {
  return animal !== "tavuk";
});
const animalsWithoutChickenPigs = animalsWithoutChicken.filter(function (
  animal
) {
  return animal !== "domuz";
});
let totalLegs = 0;
for (let animal of animalsWithoutChickenPigs) {
  if (animal === "koyun") {
    totalLegs += 4;
  } else if (animal === "inek") {
    totalLegs += 4;
  }
}
console.log("Total amount of legs is " + totalLegs);
