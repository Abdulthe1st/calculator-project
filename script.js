let display = document.getElementById("display");
document
  .getElementById("plusminus")
  .addEventListener("click", appendToDisplay3);

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (err) {
    display.value = "Error";
  }
}

function appendToDisplay2() {
  if (display.value > 0) {
    display.value /= 100;
  } else {
    display.value /= 100;
  }
}

function appendToDisplay3() {
  if (display.value > 0) {
    display.value *= -1;
  } else {
    display.value *= -1;
  }
}

document
  .getElementById("leftbracket")
  .addEventListener("click", appendToDisplay4);

function appendToDisplay4() {
  display.value += "(";
}

document
  .getElementById("rightbracket")
  .addEventListener("click", appendToDisplay5);

function appendToDisplay5() {
  display.value += ")";
}

// quiz
let rand1 = +Math.floor(Math.random() * 100);
let rand2 = +Math.floor(Math.random() * 100);
let rand3 = +Math.floor(Math.random() * 100);
let rand4 = +Math.floor(Math.random() * 100);
let rand5 = +Math.floor(Math.random() * 100);
let rand6 = +Math.floor(Math.random() * 100);
let rand7 = +Math.floor(Math.random() * 100);
let rand8 = +Math.floor(Math.random() * 100);
let rand9 = +Math.floor(Math.random() * 100);
let rand10 = +Math.floor(Math.random() * 100);
let rand11 = +Math.floor(Math.random() * 100);
let rand12 = +Math.floor(Math.random() * 100);
let rand13 = +Math.floor(Math.random() * 100);
let rand14 = +Math.floor(Math.random() * 100);

let randPower = +Math.floor(Math.random() * 4);
var num1 = Math.floor(Math.random() * 100);

document.getElementById("n1").innerHTML = num1;
document.getElementById("n2").innerHTML = rand1;
document.getElementById("n3").innerHTML = rand2;
document.getElementById("n4").innerHTML = rand3;
document.getElementById("n5").innerHTML = rand4;
document.getElementById("n6").innerHTML = rand5;
document.getElementById("n7").innerHTML = rand6;
document.getElementById("n8").innerHTML = rand7;
document.getElementById("n9").innerHTML = rand8;
document.getElementById("n10").innerHTML = randPower;

document.getElementById("quiz").addEventListener("click", quizShow);

function quizShow() {
  // q1
  let display1 = document.getElementById("in1").value;
  let n1 = +document.getElementById("n1").innerHTML;
  let n2 = +document.getElementById("n2").innerHTML;

  let correctAnswer = n1 + n2;

  console.log(correctAnswer);
  console.log(display1);

  if (display1 == correctAnswer) {
    p1.innerHTML = "correct!";
  } else {
    p1.innerHTML = "wrong!";
  }

  // q2
  let display2 = document.getElementById("in2").value;
  let n3 = document.getElementById("n3").innerHTML;
  let n4 = document.getElementById("n4").innerHTML;

  let correctAnswer2 = n3 - n4;

  if (display2 == correctAnswer2) {
    p2.innerHTML = "correct!";
  } else {
    p2.innerHTML = "wrong!";
  }

  // q3
  let display3 = document.getElementById("in3").value;
  let n5 = document.getElementById("n5").innerHTML;
  let n6 = document.getElementById("n6").innerHTML;

  let correctAnswer3 = n5 * n6;

  if (display3 == correctAnswer3) {
    p3.innerHTML = "correct!";
  } else {
    p3.innerHTML = "wrong!";
  }

  // q4
  let display4 = document.getElementById("in4").value;
  let n7 = document.getElementById("n7").innerHTML;
  let n8 = document.getElementById("n8").innerHTML;

  let correctAnswer4 = n7 / n8;

  if (display4 == correctAnswer4) {
    p4.innerHTML = "correct!";
  } else {
    p4.innerHTML = "wrong!";
  }

  // q5
  let display5 = document.getElementById("in5").value;
  let n9 = document.getElementById("n9").innerHTML;
  let n10 = document.getElementById("n10").innerHTML;

  let correctAnswer5 = n9 ** n10;

  if (display5 == correctAnswer5) {
    p5.innerHTML = "correct!";
  } else {
    p5.innerHTML = "wrong!";
  }
}

// reload page
document.getElementById("retry").addEventListener("click", reload);

function reload() {
  window.location.reload();
}

function clock() {
  let now = new Date();
  let hours = now.getHours().toString().padStart(2, 0);
  let minutes = now.getMinutes().toString().padStart(2, 0);
  let seconds = now.getSeconds().toString().padStart(2, 0);

  let time = `${hours}:${minutes}:${seconds}`;
  document.getElementById("clock").innerHTML = time;

  if (time >= 12) {
    document.getElementById(
      "clock"
    ).innerHTML = `${hours}:${minutes}:${seconds} PM`;
  } else if (time <= 12) {
    document.getElementById(
      "clock"
    ).innerHTML = `${hours}:${minutes}:${seconds} AM`;
  } else if (time == 12) {
    document.getElementById(
      "clock"
    ).innerHTML = `${hours}:${minutes}:${seconds} PM`;
  }
}

clock();
setInterval(clock, 1000);

// (2 + 7)) * 5
