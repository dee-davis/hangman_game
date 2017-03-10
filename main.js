var wordToGuess = "BREAKDANCE";
// var wordBank = ["BREAKDANCE"];
// var wordToGuess = wordBank[Math.floor(Math.random()*wordBank.length)];
var incorrectGuesses = 0;
var correctGuesses = 0;
console.log(wordToGuess);
// var buttons = $('buttons');
var buttons = document.getElementsByTagName('button');

function isLetterThere(buttonLetter) {
  if (wordToGuess.includes(buttonLetter) ) {
    correctGuesses++;
    if (correctGuesses === 8) {
    alert("YOU WIN. THE WORD WAS " + wordToGuess);
  }
  // correctGuesses++;
  document.getElementById(buttonLetter).style.background = 'green';
  } else {
    incorrectGuesses++;
  if (incorrectGuesses === 6) {
    alert("GAME OVER");
    console.log('maxNumberReached');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
  }
  // incorrectGuesses++;
  document.getElementById(buttonLetter).style.background = 'red';
}
  console.log(incorrectGuesses);
}

// Ex One:
// var str = "BREAKDANCE";
// var res = str.substring(3);
//
// Ex Two:
// letter = "A"
// display = "BR--K--NC-"
// var index = letter.guess(letter);
// index = 3
// word = word.substr(0, index) + letter + word substr(index+1);
// word.substr(0,) = "B" word.substr() = "" word = "BR--K--NC-"
// word = word.substr(0, index) + '' + word.substr(index + 1);

// Ex Three:
// "BREAKDANCE".split('')
// ["B", "R", "E", "A", "K", "D", "A", "N", "C", "E"]

// /
// document.getElementById("btnK").addEventListener("click", function(){
//   if (wordToGuess.includes("K")) {
//   document.getElementById("btnK").style.background='green';
// } else {
//   document.getElementById("btnK").style.background='red';
// }
//
// });
