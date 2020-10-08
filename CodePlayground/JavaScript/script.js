
//Button Game
var x = 0;

function counter() {
  x++;
  var a = x;
  document.getElementById("display").innerHTML = a;

  document.getElementById('button').style.color = "red";

  if (a <= 10) {
    document.getElementById("taunt").innerHTML = "I said don't click!";
  } else if (a <= 20) {
    document.getElementById("taunt").innerHTML = "Why don't you listen?";
  } else if (a <= 30) {
    document.getElementById("taunt").innerHTML = "How do you know this won't blow up the world?";
  } else if (a <= 40) {
    document.getElementById("taunt").innerHTML = "Please stop.....";
  } else if (a <= 74){
    document.getElementById("taunt").innerHTML = "Okay, you win"
  } else if (a <= 99){
    document.getElementById("taunt").innerHTML = "Wow, still going huh?"
  } else if (a <= 110){
    document.getElementById("taunt").innerHTML = "I take it you're easily amused?"
  }else {
    document.getElementById("taunt").innerHTML = "...";
  }
 


}


//Guess car color
var car = { type: "Bel-Air", model: "Chevrolet", color: "blue" };
var txt = 'Here is my "favorite" car. The color has "4" letters, can you guess what it is?';

document.getElementById("txt").innerHTML = txt;
document.getElementById("demo").innerHTML = car.model + " " + car.type;


function guess() {
 var guess = document.getElementById("guess").value;
  if (guess == "blue" || guess == "Blue") {
    document.getElementById("answer").innerHTML = "Correct!";
      var car = document.getElementById("car");
      if (car.style.display === "block") {
        car.style.display = "none";
      } else {
        car.style.display = "block";
      }}else {
    document.getElementById("answer").innerHTML = "Guess Again....";
  }
}





/*

This isn't working yet :'(

function arrayPlay(){
  let array = [];
  while(true){
    let input = document.getElementById('arrayPlay').value;
    array.push(input);
    //document.getElementById('arrayDisplay').innerHTML = array;
    console.log(array)
  }

}*/

/*{
  let grades = [];

  while(true){
    let input = prompt("add a number");
    if(input === "end" || input === null){
      break;
    }

    grades.push(Number(input));
    console.log(grades);
  }
}*/