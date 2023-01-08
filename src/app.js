/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let numberlist = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let randomnumber = numberlist[Math.floor(Math.random() * numberlist.length)];
  let number = document.querySelector(".number");
  number.innerHTML = randomnumber;
  let suitlist = ["♦", "♥", "♠", "♣"];
  let randomsuit = suitlist[Math.floor(Math.random() * suitlist.length)];
  let suit = document.querySelectorAll(".suit");
  suit.forEach(element => {
    element.innerHTML = randomsuit;
  });
};
