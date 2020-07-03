//The commented out code chunks are experiments that didn't work

/*document.querySelector("button").onclick = function chat() {
  var fruit = document.getElementById("fruit").value;

  switch (fruit) {
    case "banana":
      document.getElementById("textDisplay").innerHTML = "I hate bananas!";
      break;
    case "apple":
      document.getElementById("textDisplay").innerHTML = "I love apples!";
      break;
    case "orange":
      document.getElementById("textDisplay").innerHTML = "Oranges are okay..";
      break;
    default:
      document.getElementById("textDisplay").innerHTML =
        "I like all other fruits";
      break;
  }
};

/*function foodsILike(){

if (fruit == "banana", "bananas", "Bananas", "Banana") {
  document.getElementById("textDisplay").innerHTML = "I hate bananas!";
}else if(fruit == "grapes", "Grapes"){
  document.getElementById("textDisplay").innerHTML = "I love grapes!";
}}*/

//This chunk does work
/*document.querySelector('button').onclick = function(){
  alert('Stop poking me!');
}*/

function chat() {
  var fruit = document.getElementById("fruit").value;
  var textDisplay = document.getElementById("textDisplay");

  switch (fruit) {
    case "banana":
    case "bananas":
    case "Banana":
    case "Bananas":
      document.getElementById("textDisplay").innerHTML =
        "Bananas go great with strawberries!";
      break;
    case "apple":
    case "apples":
    case "Apple":
    case "Apples":
      document.getElementById("textDisplay").innerHTML = "I love apples!";
      break;
    case "orange":
    case "oranges":
    case "Orange":
    case "Oranges":
      document.getElementById("textDisplay").innerHTML = "Oranges are okay..";
      break;
    case "grape":
    case "grapes":
    case "Grape":
    case "Green grapes":
    case "Green Grapes":
      document.getElementById("textDisplay").innerHTML =
        "Grapes are refreshing! Purple ones are my favorite.";
      break;
    default:
      document.getElementById("textDisplay").innerHTML =
        "I like all other fruits";
      break;
  }
}

function motorcycles() {
  var answer = document.getElementById("motorcycle").value;
  var textDisplay2 = document.getElementById('textDisplay2');
  
  if (answer === "yes") {
   location.href = ("https://squatchiejones.github.io/");
  } else if (answer === "no") {
    document.getElementById("textDisplay2").innerHTML = "Aw! Okay then...";
  } else{
    document.getElementById("textDisplay2").innerHTML = "That's okay, give it some thought and come back :)";
  }
};
