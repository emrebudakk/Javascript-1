const families = [
  {
    firstname: "Ahmet",
    lastname: "Kurnaz",
    partner: "Sevil",
    childrens: [
      {
        name: "Efe",
        age: 8,
        gender: "boy",
      },
      {
        name: "Ece",
        age: 6,
        gender: "girl",
      },
    ],
    salary: 4000,
  },
  {
    firstname: "Kemal",
    lastname: "Can",
    partner: "Elif",
    childrens: [
      {
        name: "Naz",
        age: 11,
        gender: "girl",
      },
      {
        name: "Kadir",
        age: 6,
        gender: "boy",
      },
    ],
    salary: 6000,
  },
  {
    firstname: "Zakir",
    lastname: "Cemal",
    partner: "Nida",
    childrens: [
      {
        name: "Hasan",
        age: 2,
        gender: "boy",
      },
      {
        name: "Hüseyin",
        age: 6,
        gender: "boy",
      },
    ],
    salary: 5500,
  },
  {
    firstname: "Murat",
    lastname: "Demirtas",
    partner: "Simay",
    childrens: [
      {
        name: "Oktay",
        age: 15,
        gender: "boy",
      },
      {
        name: "Gülsüm",
        age: 13,
        gender: "girl",
      },
    ],
    salary: 5300,
  },
  {
    firstname: "Umut",
    lastname: "Ilicak",
    partner: "Ayse",
    childrens: [
      {
        name: "Bilal",
        age: 8,
        gender: "boy",
      },
    ],
    salary: 3000,
  },
  {
    firstname: "Durmus",
    lastname: "Demir",
    partner: "Nur",
    childrens: [
      {
        name: "Meral",
        age: 4,
        gender: "girl",
      },
    ],
    salary: 7000,
  },
];

/*  ************************************************
    1. Maasi 5000'in üzerinde olan ailelerin listesi. Listede aile babasinin isimleri ve soy isimleri isim sirasina göre listelenmeli.
      * filter yöntemiyle maaşı 5000 üzeri olan aileler tespit edilecek
      * map() kullanılarak baba isim soyisim listesi oluşturulacak
      * sort() ile isimler sıralacak
 */
const fatherFamilieList = families
  .filter((salary) => salary.salary > 5000)
  .map((fatherName) => fatherName.firstname + " " + fatherName.lastname)
  .sort();
console.log(
  "Maasi 5000'in üzerinde olan aile babaları => " + fatherFamilieList
);

/*  ************************************************
    2. Toplam erkek cocuklarinin sayisi. Cocuklarin listesi isim sirasina göre siralanmali
      * filter yöntemiyle erkek("boy") çocuklar tespit edilecek tespit edilecek
      * map() kullanılarak erkek çocuklarının isim listesi oluşturulacak
      * sort() ile isimler sıralacak
*/
const boysNumberNameList = families
  .map((children) => {
    return children.childrens
      .filter((gender) => gender.gender === "boy")
      .map((childrenName) => childrenName.name);
  })
  .flat(1)
  .sort();
console.log(
  "Erkek cocuklarin isim sirali listesi => " +
    boysNumberNameList +
    "\n" +
    "Erkek cocuklarin sayisi => " +
    boysNumberNameList.length
);

/*  ************************************************
    3. Toplam kiz cocuklarin sayisi. Cocuklarin listesi isim sirasina göre siralanmali.
      * filter yöntemiyle kız("girl") çocuklar tespit edilecek
      * map() kullanılarak girl çocuklarının isim listesi oluşturulacak
      * sort() ile isimler sıralacak
*/
const girlsNumberNameList = families
  .map((children) => {
    return children.childrens
      .filter((gender) => gender.gender === "girl")
      .map((childrenName) => childrenName.name);
  })
  .flat(1)
  .sort();
console.log(
  "Kiz cocuklarin isim sirali listesi => " +
    girlsNumberNameList +
    "\n" +
    "Kiz cocuklarin sayisi => " +
    girlsNumberNameList.length
);

/*  ************************************************
    4. Yasi 8'den kücük cocuklarin sayisi. Cocuklar yaslarina göre büyükten kücüge göre siralanmali.
      * filter yöntemiyle 8 yaşından küçük çocuklar tespit edilecek
      * map() kullanılarak 8 yaşından küçük çocukların isim listesi oluşturulacak
         yaş sıralaması yapabilmek için de ismin başına yaş eklenecek
      * sort() ile yaş sıralacak ve replace kullanılarak rakam isimden çıkarılacak
*/
const ageEightUnderNameList = families
  .map((children) => {
    return children.childrens
      .filter((ages) => ages.age < 8)
      .map((childrenName) => childrenName.age + childrenName.name);
  })
  .flat(1)
  .sort()
  .map((delNumber) => delNumber.replace(/[0-9]/g, ""));
console.log(
  "Yasi 8'den küçük cocuklarin yaş sirali listesi => " +
    ageEightUnderNameList +
    "\n" +
    "Yasi 8'den küçük cocuklarin sayisi => " +
    ageEightUnderNameList.length
);

/*  ************************************************
    5. Yasi 8'den büyük cocuklarin annelerinin isimlerinin isim sirasina göre listelenmeli.
      * filter yöntemiyle 8 yaşından büyük olan çocuklar tespit edilecek
      * yine filter kullanılarak  8 yaşından büyük olan çocukların olduğu aileler seçilecek
      * map ile bu ailelerin anne isimlerinden oluşan liste oluşturulacak
      * sort() ile isimler sıralacak
*/
const ageEightOverMotherList = families
  .filter((a) => a.childrens.filter((b) => b.age >= 8).length > 0) // kendime not: length > 0 kullanarak filterden gelen veri olup olmadığını doğruladım
  .map((ages) => ages.partner)
  .sort();
console.log(
  "8 Yasindan Büyük Cocuklarin Anneleri => " + ageEightOverMotherList
);
