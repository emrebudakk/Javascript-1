/*
pilin 4 tane state i var
-boş
-33% dolu(kırmızı)
-66% dolu(turuncu)
100% dolu(yeşil)

pilin bu 4 durumunu 4 sayı ile tanımlayabiliriz.

adımlar
1) HTML den increase ve decrease butonlarını dinlemeye başla
==>domElemani.addEventListener("click", function){}
2) Fonc. sağrımlarında data modeli değiştir
  2.1)icrease pil seviye arttır
  2.2)derease pil seviye azalt
3)HTMl i tekrar düzenle (revender , refresh)
  3.1)eğer pil seviyesi 0 ise tüm pil alanı beyaz yap
  3.2)eğer pil seviyesi 1 ise tüm pil alanı kırmızı yap
  3.3)eğer pil seviyesi 2 ise tüm pil alanı turuncu yap
  34)eğer pil seviyesi 3 ise tüm pil alanı yeşil yap
*/

// Data Model
let chargeLevel = 0; // program başladığında pil seviyesi 0'dır.

// Event Listener
const increaseButton = document.querySelector("#increase-level");
const decreaseButton = document.querySelector("#decrease-level");

increaseButton.addEventListener("click", function () {
  chargeLevel++;
  render(chargeLevel);
  console.log(render, chargeLevel);
});

decreaseButton.addEventListener("click", function () {
  chargeLevel--;
  render(chargeLevel);
  console.log(render, chargeLevel);
});
const batteryContainer = document.querySelector("#battery-container");
const level1 = document.querySelector("#battery-level-1");
const level2 = document.querySelector("#battery-level-2");
const level3 = document.querySelector("#battery-level-3");
const batteryStatus = document.querySelector("#battery-status");

function render(pLevel) {
  batteryContainer.className = `battery-level-${pLevel}`;
  batteryStatus.innerHTML = `battery Status: ${pLevel * 33.4}%`;
}
