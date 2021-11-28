// rastgele deger(Math.random() 1 ile 10 arasinda rastgele deger)
let y = Math.floor(Math.random() * 10 + 1);
document.getElementById("guessField").innerHTML = y;
//Hak sayisi
let hak = 4;

// Tahmin sayisi baslangici
let guess = 1;

document.getElementById("submitguess").onclick = function () {
  // kullanıcı tarafından girilen sayi
  let x = document.getElementById("guessField").value;

  //hak sayaci
  if (y != x.value && guess > hak) {
    window.alert("Uzgunum!! Ahmet Kacti :((");
    return;
  }

  //dogru tahmin
  if (x == y) {
    window.alert(
      "Tebrikler!!! Dogru tahmin ettin " +
        guess +
        ". hakkinda bildin :))" +
        (100 - (guess - 1) * 15)
    );
  } else if (x > y) {
    // Tahmin icin girilen sayi daha buyukse
    guess++;
    window.alert("Ahmet ön vagonlarda!! Daha kucuk bir sayi gir...");
    //Tahmin icin girilen sayi daha kucukse
  } else {
    guess++;
    window.alert("Ahmet arka vagonlarda!! Daha buyuk bir sayi gir...");
  }
};
