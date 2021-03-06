const fishFarm = [
  {
    fishType: "Salmon",
    price: 15.7,
    entryDate: new Date(2021, 0, 1), // 01.01.2021
    durationInDays: 30,
    itemWeightInGrams: 145,
    originCountry: "Norway",
    season: "Winter",
    stockVolumeInKg: 6500,
    saleLocations: ["ZH", "GE", "BE", "VD"],
  },
  {
    fishType: "Seatrout",
    price: 7.9,
    entryDate: new Date(2021, 11, 12), // 12.12.2021
    durationInDays: 20,
    itemWeightInGrams: 460,
    originCountry: "Japan",
    season: "Winter",
    stockVolumeInKg: 1600,
    saleLocations: ["GL", "GR", "BE", "VS"],
  },
  {
    fishType: "Sailfish",
    price: 5.2,
    entryDate: new Date(2021, 3, 19),
    durationInDays: 15,
    itemWeightInGrams: 240,
    originCountry: "United Kingdom",
    season: "Spring",
    stockVolumeInKg: 500,
    saleLocations: ["ZH", "SH", "BL", "SO"],
  },
  {
    fishType: "Red Drum",
    price: 3.1,
    entryDate: new Date(2021, 5, 15),
    durationInDays: 18,
    itemWeightInGrams: 300,
    originCountry: "Poland",
    season: "Summer",
    stockVolumeInKg: 15500,
    saleLocations: ["FR", "GE", "NE", "TI"],
  },
  {
    fishType: "Pompano",
    price: 10,
    entryDate: new Date(2021, 8, 17),
    durationInDays: 20,
    itemWeightInGrams: 645,
    originCountry: "France",
    season: "Autumn",
    stockVolumeInKg: 1500,
    saleLocations: ["ZH", "GE", "BE", "VD"],
  },
  {
    fishType: "Bluefish",
    price: 13.7,
    entryDate: new Date(2021, 10, 11),
    durationInDays: 5,
    itemWeightInGrams: 845,
    originCountry: "Italy",
    season: "Winter",
    stockVolumeInKg: 200,
    saleLocations: ["NW", "OW", "UR", "LU"],
  },
  {
    fishType: "Mackerel",
    price: 8.9,
    entryDate: new Date(2021, 6, 18),
    durationInDays: 16,
    itemWeightInGrams: 150,
    originCountry: "GREECE",
    season: "Summer",
    stockVolumeInKg: 8100,
    saleLocations: ["AG", "BL", "BE", "VD", "TG"],
  },
  {
    fishType: "Perch",
    price: 11.9,
    entryDate: new Date(2021, 10, 1),
    durationInDays: 30,
    itemWeightInGrams: 222,
    originCountry: "Egypt",
    season: "Summer",
    stockVolumeInKg: 9500,
    saleLocations: ["TI", "GE", "ZH", "VD", "AR"],
  },
  {
    fishType: "Mullet",
    price: 4.8,
    entryDate: new Date(2021, 2, 14),
    durationInDays: 30,
    itemWeightInGrams: 333,
    originCountry: "Vietnam",
    season: "Summer",
    stockVolumeInKg: 600,
    saleLocations: ["ZH", "GE", "BE", "VD"],
  },
  {
    fishType: "Tuna",
    price: 19.5,
    entryDate: new Date(2021, 0, 1),
    durationInDays: 30,
    itemWeightInGrams: 250,
    originCountry: "Spain",
    season: "<Winter>",
    stockVolumeInKg: 2300,
    saleLocations: ["ZH", "VD", "BS", "TI", "SG"],
  },
];

/* ****************************************************************
  1) Stok miktari 500 kg uzerinde olan baliklarin isimleri nelerdir?
  * Stok miktar?? 500 kg ??zeri stok miktar??na sahip elemanlar "filtre" ile bulunur
  * Sonra bu ??zelli??e sahip elemanlar??n fishType leri listelenir.
  * ve "sort" ile sralamalar?? yap??l??r.
*/
const fishWeightStockList = fishFarm
  .filter((fish) => fish.stockVolumeInKg >= 500)
  .map((fishName) => fishName.fishType)
  .sort();

console.log(
  `1) Stok miktari 500 kg uzerinde olan baliklarin isimleri => ${fishWeightStockList}`
);

/* ****************************************************************
  2) Fiyat araligi 9Fr. ile 12 Fr. arasindaki baliklar hangileridir?
  * Fiyat araligi 9Fr. ile 12 Fr. arasinda olan elemanlar "filtre" ile bulunur
  * Sonra bu ??zelli??e sahip elemanlar??n fishType leri "map" ile listelenir.
  * ve "sort" ile sralamalar?? yap??l??r.
*/
const fishPriceControlList = fishFarm
  .filter((fish) => fish.price >= 9)
  .filter((fish) => fish.price <= 12)
  .map((fishName) => fishName.fishType)
  .sort();

console.log(
  `2) Fiyat araligi 9 Fr. ile 12 Fr. arasindaki baliklar => ${fishPriceControlList}`
);

/* ****************************************************************
  3) Sadece Bern'de ve kis sezonu satilan baliklar hangileridir?
    * K???? sezonu sat??lan bal??klar??n oldu??u elemanlar "filtre" ve "includes" ile bulunur
    * Bern'de sat??lan bal??klar??n oldu??u elemanlar "filtre" ile indirgenir
    * Sonra bu ??zelli??e sahip elemanlar??n fishType leri "map" ile listelenir.
*/
const fishCityWinterSoldList = fishFarm
  // .filter((seosons) => seosons.season === "Winter")
  .filter((seosons) => seosons.season.includes("Winter"))
  .filter((location) => location.saleLocations.includes("BE"))
  .map((fishName) => fishName.fishType);

console.log(
  `3) Sadece Bern'de ve kis sezonu satilan baliklar => ${fishCityWinterSoldList}`
);

/* ****************************************************************
  4) Son kullanma tarihlerine gore baliklari siralayiniz.
  (Son kullanma tarihi yaklasan baliklar once gosterilmelidir)
    * Son kullanma tarihleri "filtre" ile bulunur
    * "sort" ile sralamalar?? yap??l??r.
    * Sonra bu ??zelli??e sahip elemanlar??n fishType leri "map" ile listelenir.
    
*/
const fishExpirationDateList = fishFarm
  .filter((date) => date.entryDate <= new Date())
  .sort((a, b) => a.entryDate - b.entryDate)
  .map((fishName) => fishName.fishType);

console.log(
  `4) Son kullanma tarihi s??ral?? balik listesi => ${fishExpirationDateList}`
);

/* ****************************************************************
  5) Avrupa Birligi'nden (AB) gelen ve fiyati 10Fr dan dusuk olan baliklari
  alfabetik siraya gore siralayiniz.
    * Avrupa ??lkeleri i??in yeni bir array (europaLand) olu??turulacak
    * Fiyat?? 10 Fr alt?? bal??klar "filter" ile bulunacak
    * AB ??lkelerinden gelen bal??klar "filter" ve "includes" ile (europaLand) array??na bak??larak bulunacak
    * Sonra bu ??zelli??e sahip elemanlar??n fishType leri "map" ile listelenecek.
*/

const europaLand = [
  "Albania",
  "Andorra",
  "Armenia",
  "Austria",
  "Azerbaijan",
  "Belarus",
  "Belgium",
  "Bosnia and Herzegovina",
  "Bulgaria",
  "Croatia",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Estonia",
  "Finland",
  "France",
  "Georgia",
  "Germany",
  "GREECE",
  "Hungary",
  "Iceland",
  "Ireland",
  "Italy",
  "Kosovo",
  "Latvia",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macedonia",
  "Malta",
  "Moldova",
  "Monaco",
  "Montenegro",
  "The Netherlands",
  "Norway",
  "Poland",
  "Portugal",
  "Romania",
  "Russia",
  "San Marino",
  "Serbia",
  "Slovakia",
  "Slovenia",
  "Spain",
  "Sweden",
  "Switzerland",
  "Turkey",
  "Ukraine",
  "United Kingdom",
  "Vatican City",
];

const newComeEuFishList = fishFarm
  .filter((fish) => fish.price < 10 && europaLand.includes(fish.originCountry))
  .sort((a, b) => a - b)
  .map((fishName) => fishName.fishType);

console.log(
  `5) Avrupa Birligi'nden (AB) gelen ve fiyati 10Fr dan dusuk olan baliklar => ${newComeEuFishList}`
);

/* ****************************************************************
  6) Toplam balik stoku ne kadardir?
    * Stok miktarlar??na sahip elemanlar "map" ile listelenir
    * Sonra bu ??zelli??e sahip elemanlar??n reduce y??ntemi toplamlar?? al??n??r.
*/
const fishStockTotalKg = fishFarm
  .map((total) => total.stockVolumeInKg)
  .reduce((total, pozitive) => total + pozitive);

console.log(`6) Toplam balik stoku => ${fishStockTotalKg} KG`);

/* ****************************************************************
  7) En pahali olan balik hangisidir?
  * Price elemanlar?? "filtre" ile bulunur
  * Sonra bu ??zelli??e sahip elemanlar??n fishType leri listelenir.
  * ve "sort" ile en y??ksek fiyatl?? bal??k listelenir.
*/
const expensiveFish = fishFarm
  .filter((fishPrice) => fishPrice.price)
  .map((fishName) => fishName.fishType)
  .sort((a, b) => a - b)[fishFarm.length - 1];

console.log(`7) En pahali olan balik => ${expensiveFish}`);

/* ****************************************************************
  8) En uzun sure dayanabilen baliklar hangi ulkeden gelmektedir?
  * durationInDays elemanlar?? "filtre" ile bulunur
  * Hangi ??lkeden al??nd??klar?? "filtre" ile bulunur
  * Sonra bu ??zelli??e sahip elemanlar??n fishType leri listelenir.
  * ve "sort" ile dayan??kl??l??k s??resi en uzun olan bal??k listelenir.
*/
const maxDaysFish = fishFarm.sort(
  (a, b) => b.durationInDays - a.durationInDays
)[0].durationInDays;
const hardyFish = fishFarm
  .filter((a) => a.durationInDays === maxDaysFish)
  .map((country) => country.originCountry);

console.log(`8) En uzun sureli durabilen bal??????n ??lkesi => ${hardyFish}`);

/* ****************************************************************
  9) Kis ve sonbahar sezonu icin swiss romande region'da satilan baliklarin ortalama fiyati nedir?
    * K???? ve yaz sezonu sat??lan bal??klar??n oldu??u elemanlar "filtre" ile bulunur
    * Bu ??zelli??e sahip olan bal??klar??n price'?? "map" ile listelenir
    * Sonra elemanlar??n reduce y??ntemi toplamlar?? ve orlamalar?? al??n??r.
*/
const winterSpringPriceAverage =
  fishFarm
    .filter((seasons) => seasons.season === "Winter" || "Autumn")
    .map((total) => total.price)
    .reduce((total, pozitive) => total + pozitive) / fishFarm.length;

console.log(
  `9) Kis ve sonbahar sezonu icin swiss romande region'da satilan baliklarin ortalama fiyati => ${winterSpringPriceAverage} CHF`
);

/* ****************************************************************
  10) Ticino Kantonu icin stokta toplam ne kadar balik mevcuttur?
    * Ticino'da sat??lan bal??klar??n oldu??u elemanlar "filtre" ve "includes" ile bulunur
    * Bu ??zelli??e sahip olan bal??klar??n stockVolumeInKg'?? "map" ile listelenir
    * Sonra elemanlar??n reduce y??ntemi toplamlar?? al??n??r.
*/
const ticinoFishStock = fishFarm
  .filter((location) => location.saleLocations.includes("TI"))
  .map((totalFish) => totalFish.stockVolumeInKg)
  .reduce((total, pozitive) => total + pozitive);

console.log(
  `10) Ticino Kantonu icin stoktaki toplam balik miktar?? => ${ticinoFishStock} KG`
);

/* ****************************************************************
  11) Yazlik sezonda cikan ve AB disindan gelen ve de ZH'de satilan baliklarin ortalama gramajini bulunuz?
    * Yazl??k sezonda sat??lan bal??klar??n oldu??u elemanlar "filtre" ve "includes" ile bulunur
    * Z??rih'te sat??lan bal??klar??n oldu??u elemanlar "filtre" ve "includes" ile indirgenir
    * AB d??????ndan gelen bal??klar??n oldu??u elemanlar "filtre" ve "includes" ile indirgenir
    * Bu ??zelli??e sahip olan bal??klar??n itemWeightInGrams'?? "map" ile listelenir
    * Sonra elemanlar??n reduce y??ntemi toplamlar?? ve ortalamalar?? al??n??r.
    * 
  *AB d?????? eklenecek
*/
const summerEuOutInZurich = fishFarm
  .filter((seasons) => seasons.season.includes("Summer"))
  .filter((locations) => locations.saleLocations.includes("ZH"))
  .filter((fish) => !europaLand.includes(fish.originCountry))
  .map((total) => total.itemWeightInGrams);

const summerEuOutInZurichAverage =
  summerEuOutInZurich.reduce((total, pozitive) => total + pozitive) /
  summerEuOutInZurich.length;

console.log(
  `11) Yazlik sezonda cikan ve AB disindan gelen ve de ZH'de satilan baliklarin ortalama gramaji=> ${summerEuOutInZurichAverage} GR`
);
