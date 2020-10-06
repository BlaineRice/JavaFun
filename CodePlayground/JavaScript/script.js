/*function changeText(id){
    id.innerHTML = "Goodbye World";
}*/

/*function dogCalc(){
    var age = document.getElementById('age').value;
    var dogAge = age * 7;
    display.innerHTML = dogAge;
}
*/

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
    document.getElementById("taunt").innerHTML = "How do you know I don't REALLY want you to click me?";
  } else if (a <= 40) {
    document.getElementById("taunt").innerHTML = "Almost there!";
  } else {
    document.getElementById("taunt").innerHTML = "Okay, you win";
  }
 


}

var car = { type: "Acura", model: "Integra", color: "white" };
var txt = 'Here is my "favorite" car. The color has "5" letters, can you guess what it is?';

document.getElementById("txt").innerHTML = txt;
document.getElementById("demo").innerHTML = car.type + "<br>" + car.model;


function guess() {
 var guess = document.getElementById("guess").value;
  if (guess == "white") {
    document.getElementById("answer").innerHTML = "Correct!";
  } else {
    document.getElementById("answer").innerHTML = "Guess Again....";
  }
}





/*function arrayPlay(){
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