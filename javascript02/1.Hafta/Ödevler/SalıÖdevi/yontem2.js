/*
1. Çiftçiden hayvan listesi alınır
2. Necip usta için iki ayaklı ve dört ayaklı helal hayvanlar listesi oluşturulur.
3. Çiftçinin listesiyle helal listesindeki hayvanlar karşılaştırılır ve 
   helal olan tüm hayvanlar tespit edilir.
4. iki ayaklı hayvanlar için .lenght*2
   dört ayaklı hayvanlar için .lenght*4 işlemleri yapılarak
   toplamları alınır.
*/
// adım 1
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

// adım 2
const fourfoothelal = ["inek", "koyun"];
const twofootlihelal = ["tavuk"];

function footCalculate() {
  // adım 3
  const fourfootcommon = animallist.filter((element) =>
    fourfoothelal.includes(element)
  );
  console.log(fourfootcommon);

  const twofootcommon = animallist.filter((element) =>
    twofootlihelal.includes(element)
  );

  // adım 4
  console.log(twofootcommon);
  let result = fourfootcommon.length * 4 + twofootcommon.length * 2;
  return "toplam ayak sayısı: " + result;
}
console.log(footCalculate());
