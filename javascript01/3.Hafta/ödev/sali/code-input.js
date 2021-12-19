function hesapla() {
  let sayi1 = document.getElementById("sayi1").value;
  let sayi2 = document.getElementById("sayi2").value;

  let s1 = Number(sayi1);
  console.log(s1);
  let s2 = Number(sayi2);
  console.log(s2);

  if (s1 > s2)
    document.getElementById("sonuc").innerHTML =
      "SEVGILI MINIK MINE " +
      "<br>" +
      "Girilen birinci sayı olan " +
      "<br>" +
      s1 +
      " sayısı " +
      "<br>" +
      s2 +
      " sayısından daha büyüktür.";
  else if (s2 > s1)
    document.getElementById("sonuc").innerHTML =
      "SEVGILI MINIK MINE " +
      "<br>" +
      "Girilen ikinci sayı olan " +
      "<br>" +
      s2 +
      " sayısı " +
      "<br>" +
      s1 +
      " sayısından büyüktür.";
  else
    document.getElementById("sonuc").innerHTML = "İki sayı birbirne eşittir.";
  console.log(sonuc);
}

let hesaplaBtn = document.getElementById("buton");
hesaplaBtn.onclick = hesapla;
