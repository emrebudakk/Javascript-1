function getVegetablesFromServer() {
  const vegs = ["kabak", "biber", "patlican", "brokoli"];
  return vegs;
}
const vegContainer = document.querySelector("#veg-container");
// vegContainer.innerHTML = "<li>Patates</li>";
const vegListFromServer = getVegetablesFromServer();
vegContainer.innerHTML = vegListFromServer
  .map((veg) => `<li>${veg}</li>`)
  .join("");
