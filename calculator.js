"use strict";

window.addEventListener("load", start);

let result = document.querySelector("#results");

function start() {
  console.log("start calculation");
  document.querySelector("#calculate").addEventListener("click", calculate);
  document.querySelector("#clear").addEventListener("click", clear);
}

//get info to calculate
function calculate() {
  console.log("calculate");
  let firstnumber = document.querySelector("#firstnumber").value;
  let topinput = parseFloat(firstnumber);

  let secondnumber = document.querySelector("#secondnumber").value;
  let bottominput = parseFloat(secondnumber);

  let operator = document.querySelector("#operator").value;

  if (operator === "add") {
    console.log("add");
    console.log(`the result is ${topinput + bottominput}`);
    result = topinput + bottominput;
    showResult();
  }
}
//minus

//multi

//divide

//show result
function showResult() {
  document.querySelector("#results>li").innerHTML = result;
  append();
}
//append?
function append() {
  console.log("append results");
}
//clear
function clear() {
  console.log("clear results");
  document.getElementById("results").innerHTML = 0;
}
