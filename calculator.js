alert("Simple Calculator!");
console.log("-----Calculator-------");
console.log("By. Andrie Quinatac-an");
console.log("(Andri Quinn)");

var num0 = document.getElementsByTagName("button")[1].value ="0";
var num1 = document.getElementsByTagName("button")[5].value = "1";
var num2 = document.getElementsByTagName("button")[6].value = "2";
var num3 = document.getElementsByTagName("button")[7].value = "3";
var num4 = document.getElementsByTagName("button")[9].value = "4";
var num5 = document.getElementsByTagName("button")[10].value = "5";
var num6 = document.getElementsByTagName("button")[11].value = "6";
var num7 = document.getElementsByTagName("button")[13].value = "7";
var num8 = document.getElementsByTagName("button")[14].value = "8";
var num9 = document.getElementsByTagName("button")[15].value = "9";

var plus = document.getElementsByTagName("button")[2].value = "+";
var minus = document.getElementsByTagName("button")[3].value = "-";
var times = document.getElementsByTagName("button")[8].value= "*";
var divide = document.getElementsByTagName("button")[12].value = "/";

var display = document.getElementById("displayNums");

function pressButton(arg) {
  display.value += arg;
}

function calculate() {
  let result = eval(display.value);
  display.value = result;
}

function erase() {
  let expression = display.value.split("");
  expression.pop();
  let newExpression = expression.join("");
  display.value = newExpression;
}
