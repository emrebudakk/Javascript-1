const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const kutup = document.querySelector("#kutup");
const kutu1 = document.querySelector("#kutu1");
const kutu2 = document.querySelector("#kutu2");
const kutu3 = document.querySelector("#kutu3");

let counter = 0;

let clickOne = function () {
  kutup.style.background = "red";
  kutu3.style.background = "red";
  kutu2.style.background = "";
  kutu1.style.background = "";
  kutu3.textContent = `%33`;
};

let clickTwo = function () {
  kutup.style.background = "Orange";
  kutu3.style.background = "Orange";
  kutu2.style.background = "Orange";
  kutu1.style.background = "";
  kutu2.textContent = `%66`;
  kutu3.textContent = ``;
};

let clickThree = function () {
  kutup.style.background = "green";
  kutu3.style.background = "green";
  kutu2.style.background = "green";
  kutu1.style.background = "green";
  kutu1.textContent = `%100`;
  kutu2.textContent = ``;
};
let clickFour = function () {
  kutup.style.background = "";
  kutu3.style.background = "";
  kutu2.style.background = "";
  kutu1.style.background = "";
  kutu1.textContent = `%100`;
  kutu2.textContent = ``;
};

let chargeFunction = function () {
  if (counter == 0) {
    clickOne();
    counter++;
  } else if (counter == 1) {
    clickTwo();
    counter++;
  } else {
    clickThree();
  }
};

let dischargeFunction = function () {
  if (counter == 2) {
    clickTwo();
    counter--;
  } else if (counter == 1) {
    clickOne();
    counter--;
  } else {
    clickFour();
  }
};
