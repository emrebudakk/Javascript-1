/*
1. Adım: Prompt ile kullanıcı girişi oluşturulacak
2. Adım: Animal Horoscope List Array i oluşturulacak
3. Adım: Chinese Elements Horoscope Array i oluşturulacak
4. Adım: Kullanıcı girişini işleyerek 12 burç için bir Fonksiyon oluşturulacak
5. Adım: Burçlar 12 yılda bir döneceği için kullanıcının doğum tarihinin 
         12 ile modunu alma ve kalan sayı Burçlarla eşleştirilecek
6. Adım: Yine kullanıcı girişini işleyerek 5 element için bir Fonksiyon oluşturulacak
7. Adım: 5 elementin herbiri 2 yılda bir değiştiği için kullanıcının doğum tarihinin
         10 ile modu alınacak ve kalan sayı Elementlerle eşleştirilecek
8. Adım: Sonuç oluşturulan fonksiyonlar kullanılarak Console a yazdırılacak
*/

const personBirthYear = prompt("Please!! Enter your year of birth!!");

const animalHoroscopeList = [
  "Monkey",
  "Cock",
  "Dog",
  "Boar",
  "Rat",
  "Ox",
  "Tiger",
  "Rabbit",
  "Dragon",
  "Snake",
  "Horse",
  "Sheep",
];

const chineseElements = ["Metal", "Water", "Wood", "Fire", "Earth"];

function pChineseHoroscope() {
  const yearLoop = personBirthYear % 12;
  if (yearLoop === 0) {
    horoscope = animalHoroscopeList[0];
  } else if (yearLoop === 1) {
    horoscope = animalHoroscopeList[1];
  } else if (yearLoop === 2) {
    horoscope = animalHoroscopeList[2];
  } else if (yearLoop === 3) {
    horoscope = animalHoroscopeList[3];
  } else if (yearLoop === 4) {
    horoscope = animalHoroscopeList[4];
  } else if (yearLoop === 5) {
    horoscope = animalHoroscopeList[5];
  } else if (yearLoop === 6) {
    horoscope = animalHoroscopeList[6];
  } else if (yearLoop === 7) {
    horoscope = animalHoroscopeList[7];
  } else if (yearLoop === 8) {
    horoscope = animalHoroscopeList[8];
  } else if (yearLoop === 9) {
    horoscope = animalHoroscopeList[9];
  } else if (yearLoop === 10) {
    horoscope = animalHoroscopeList[10];
  } else if (yearLoop === 11) {
    horoscope = animalHoroscopeList[11];
  }
  return horoscope;
}

function pChineseElement() {
  const yearLoop = personBirthYear % 10;
  if (yearLoop === 0 || yearLoop === 1) {
    Elements = chineseElements[0];
  } else if (yearLoop === 2 || yearLoop === 3) {
    Elements = chineseElements[1];
  } else if (yearLoop === 4 || yearLoop === 5) {
    Elements = chineseElements[2];
  } else if (yearLoop === 6 || yearLoop === 7) {
    Elements = chineseElements[3];
  } else if (yearLoop === 8 || yearLoop === 9) {
    Elements = chineseElements[4];
  }
  return Elements;
}
console.log(
  "sexagenary" +
    "(" +
    personBirthYear +
    ")" +
    "=> " +
    pChineseElement() +
    " " +
    pChineseHoroscope()
);
