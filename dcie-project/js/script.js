
// ALL IMAGES ARE HERE

let images = ["dice-1.png",
"dice-2.png",
"dice-3.png",
"dice-4.png",
"dice-5.png",
"dice-6.png"];


let dice = document.querySelectorAll("img");
console.log(dice);

function roll(){
  dice.forEach(function(die){
    die.classList.add("shake");
  });
  setTimeout(function(){
    dice.forEach(function(die){
      die.classList.remove("shake")
    });
    let diceOneValue = Math.floor(Math.random()*6);
    let diceTwoValue = Math.floor(Math.random()*6);

    console.log(diceOneValue,diceTwoValue);
    // CHANGING IMAGES
    document.querySelector("#die-1").setAttribute("src", images[diceOneValue]);
    document.querySelector("#die-2").setAttribute("src", images[diceTwoValue]);
    document.querySelector("#total").innerHTML = "Your Roll is" + ' ' + ( (diceOneValue + 1) + (diceTwoValue + 1) );
  },
  1000
);
}
roll();
