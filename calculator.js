alert("Simple Calculator!");
console.log("-----Calculator-------");
console.log("By. Andrie Quinatac-an");
console.log("(Andri Quinn)");

// Input Variable -

let Calvalue = document.getElementById("inputVal");

// Number Buttons Variables -

let num1 = document.getElementsByClassName("numbers")[0] = "1";
let num2 = document.getElementsByClassName("numbers")[1] = "2";
let num3 = document.getElementsByClassName("numbers")[2] = "3";
let num4 = document.getElementsByClassName("numbers")[3] = "4";
let num5 = document.getElementsByClassName("numbers")[4] = "5";
let num6 = document.getElementsByClassName("numbers")[5] = "6";
let num7 = document.getElementsByClassName("numbers")[6] = "7";
let num8 = document.getElementsByClassName("numbers")[7] = "8";
let num9 = document.getElementsByClassName("numbers")[8] = "9";
let num0 = document.getElementsByClassName("numbers")[9] = "0";

// Operators Variables - 
let plus = document.getElementsByClassName("operators")[0] = " + ";
let minus = document.getElementsByClassName("operators")[1] = " - ";
let divide= document.getElementsByClassName("operators")[2] = " / ";
let multiply = document.getElementsByClassName("operators")[3] = " x ";

// Global Variable For Evaluating Purpose -

window.numeros = Calvalue.value;

// Add Input Function -

function putNum(something) {
	Calvalue.value += something;
	window.numeros = Calvalue.value;
	console.log(numeros)
}

// Remove Input Function -

function remove() {
	let val = Calvalue.value.split("");
	val.pop();
	Calvalue.value = val.join("");
	window.numeros = Calvalue.value;
	console.log(numeros);
}

function eval(inputval) {

	// Takes the input as an array - 
	// example inputVal = 1 + 2 turns into [1,+,2] = value
	let value = inputval.split(" "); 

	// for solving and replacing the elements of the array.
	let result = 0; 
	let operators = ["x","/","+","-"], n = 0;

	// PEMDAS Sequence.
	while (value.length != 1) {
		for (i of value) {

			if ( (operators[n] == i) && (operators[n] == "x") ) {
				result = Number(value[value.indexOf(i) - 1]) * Number(value[value.indexOf(i) + 1]);
				value.splice(value.indexOf(i) - 1, 3, result);
				result = 0;

			}

			else if ( (operators[n] == i) && (operators[n] == "/") ) {
				result = Number(value[value.indexOf(i) - 1]) / Number(value[value.indexOf(i) + 1]);
				value.splice(value.indexOf(i) - 1, 3, result);
				result = 0;
			}

			else if ( (operators[n] == i) && (operators[n] == "+") ) {
				result = Number(value[value.indexOf(i) - 1]) + Number(value[value.indexOf(i) + 1]);
				value.splice(value.indexOf(i) - 1, 3, result);
				result = 0;
			}

			else if ( (operators[n] == i) && (operators[n] == "-") ) {
				result = Number(value[value.indexOf(i) - 1]) - Number(value[value.indexOf(i) + 1]);
				value.splice(value.indexOf(i) - 1, 3, result);
				result = 0;
			}

		}
		n += 1;
	}
	Calvalue.value = value[0];
}