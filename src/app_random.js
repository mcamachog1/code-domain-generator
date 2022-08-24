/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let extension = [".com", ".net"];

function getRandomElement(list) {
  let max = list.length;
  let index = Math.floor(Math.random() * max);
  return list[index];
}

window.onload = function() {
  //write your code here
  console.log(getRandomElement(pronoun));
  console.log(getRandomElement(adj));
  console.log(getRandomElement(noun));
  console.log(getRandomElement(extension));
};
