/**
 * Adım 1: 2 farklı Array olduğu için Array.prototype yöntemiyle
 bir function oluşturulacak
 * Array içerisinden Math.floor(Math.random()) yöntemi ile 
yeni bir array oluşturacak bir For döngüsü kullanılacak
 * Oluşturulan Array.prototype fonksiyonu ile çalışacak Array ler oluşturulacak
 * Yine For döngüsüyle 1. ve 2. Arrayden 1'er eleman alma işlemi 5 kez çalıştırılacak
 */

Array.prototype.random = function (n) {
  let newList = [];
  for (let i = 0; i < n; i++) {
    let index = Math.floor(Math.random() * this.length); // Kendime Not: Math.floor yerine ~~ işaretleri de kullanılabilir
    newList.push(this[index]);
    this.splice(index, 1); // index ile groupList ve perosnalList ten alinan 1 elemanı groupList ve perosnalList ten siliyor
  }
  return newList;
};

const groupList = ["Rangers", "Raiders", "Wilds", "Canaries", "Bears"];
const personalList = [
  "Bowie",
  "Boyd",
  "Aaron-James",
  "Aarron",
  "Aaryan",
  "Aaryn",
  "Conner",
  "Connolly",
  "Fauzaan",
  "Favour",
  "Fawaz",
  "Fawkes",
  "Connor",
  "Aayan",
  "Bracken",
  "Brad",
];
for (let i = 0; i < 5; i++) {
  console.log(groupList.random(1) + " " + personalList.random(1));
}

/*2. Yöntem(Code Review de yapılan)
*Analiz
1. Start
2. Rastgele bir grup ismi seçmem lazım => Math.floor(Math.random()) yöntemi ile
3. Rastgele bir ismi seçmem lazım
4. Bu iki ismi birleştirmem lazım =>
5. Yukarıdaki işlemler x defa tekrarlanmalı
6. Sonucu ekrana yazdırmalıyım
7. Finished
*/
