const fiyat = document.getElementById("fiyat");
const toplam = document.getElementById("toplam");

const degerYakala = function (e) {
  console.log("fiyat " + fiyat.value);
  toplam.innerHTML = e.target.value;
  console.log("toplam " + toplam.innerHTML);
};

fiyat.addEventListener("input", degerYakala);
