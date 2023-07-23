function clearScreen(){
	document.getElementById("result").value="";
	document.getElementById("answerBox").value="";
}
var count=0;

function display(value){
	document.getElementById("result").value += value;
	document.getElementById("answerBox").value += "";
	++count;
	
	if(count>=3){
		calculate4();
	}
}


function calculate(){
var input = document.getElementById("result");
var equation = input.value;

if(equation.includes("%")){
	equation = equation.replace("%", "");
	var result = new Function('return ' + equation)() * 0.01;
		input.value = result;
	}
	else{
	var result = new Function('return ' + equation)();
	input.value = result;
	}
}

function calculate2(){
	var input = document.getElementById("answerBox");
	var equation = input.value;
	
	if(equation.includes("%")){
		equation = equation.replace("%", "");
		var result = new Function('return ' + equation)() * 0.01;
			input.value = result;
		}
		else{
		var result = new Function('return ' + equation)();
		input.value = result;
		}
	}

	function calculate3() {
		var resultInput = document.getElementById("result");
  var answerInput = document.getElementById("answerBox");
  var equation = resultInput.value;

  if (equation.includes("%")) {
    equation = equation.replace("%", "");
    var result = new Function('return ' + equation)() * 0.01;
    answerInput.value = result;
  } else {
    var result = new Function('return ' + equation)();
    answerInput.value = result;
  }

  resultInput.value = "";
	}

function calculate4(){
	var input = document.getElementById("result");
  var equation = input.value;
  var answerBox = document.getElementById("answerBox");

  if (equation.includes("%")) {
    equation = equation.replace("%", "");
    var result = new Function('return ' + equation)() * 0.01;
    answerBox.value = result; // Set the answer in "answerBox"
  } else {
    var result = new Function('return ' + equation)();
    answerBox.value = result; // Set the answer in "answerBox"
  }

}