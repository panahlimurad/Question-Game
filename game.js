let btn = document.querySelector("#btn");
let suallar = [
  {
    question: "What do you call people who are 18+ ?",
    var_a: "Baby",
    var_b: "Adult",
    var_c: "Person",
    answer: "b",
  },
  {
    question: "What color is the tree?",
    var_a: "Red",
    var_b: "Brown",
    var_c: "Green",
    answer: "c",
  },
  {
    question: "What do you call someone who has a wife?",
    var_a: "Wife",
    var_b: "Husband",
    var_c: "Married",
    answer: "c",
  },
  {
    question: "Which is the most us level in English?",
    var_a: "B1",
    var_b: "C2",
    var_c: "A4",
    answer: "b",
  },
  {
    question: "What color is the sky?",
    var_a: "Blue",
    var_b: "Yellow",
    var_c: "Green",
    answer: "a",
  },
];

btn.addEventListener("click", () => {
  document.querySelector(".container").style.display = "block";
  document.querySelector(".start_title").style.display = "none";
  document.querySelector(".startButton").style.display = "none";
  startGame(0);
  endGame();
});

function endGame() {
  document.querySelector(".container").style.display = "block";
  document.querySelector(".start_title").style.display = "none";
  document.querySelector(".startButton").style.display = "none";
  cavablar = "";
  xal = 0;
  nextQuestion = 0;
  startGame(0);
}

let cavablar = "";
let xal = 0;
let nextQuestion = 0;

function startGame(q_num) {
  if (nextQuestion === suallar.length) {
    document.querySelector(".container").style.display = "none";
    document.querySelector(".start_title").style.display = "block";
    document.querySelector(".startButton").style.display = "block";
    return;
  }

  document.querySelector("#questionText").innerHTML = suallar[q_num].question;
  document.querySelector("#var_a").innerHTML = suallar[q_num].var_a;
  document.querySelector("#var_b").innerHTML = suallar[q_num].var_b;
  document.querySelector("#var_c").innerHTML = suallar[q_num].var_c;
  cavablar = suallar[q_num].answer;
}

function changeGame(e) {
  userChoose = e.key;
  if (["a", "b", "c"].indexOf(userChoose) === -1) {
    alert("Please choose a, b, c letters");
    return;
  }
  if (userChoose === cavablar) {
    novbetiSual();
    xal += 20;
    document.querySelector("#point").innerHTML = xal;
  } else {
    novbetiSual();
    xal += 0;
  }
}

function novbetiSual() {
  nextQuestion++;
  startGame(nextQuestion);
}

window.onkeydown = changeGame;
