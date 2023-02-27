const title = document.createElement("h1");
title.setAttribute("id", "title");
title.innerText = "My Calculator";

const description = document.createElement("p");
description.setAttribute("id", "description");
description.innerText = "This is a simple calculator";

const display = document.createElement("input");
display.setAttribute("type", "text");
display.setAttribute("id", "result");
display.setAttribute("class", "display");
display.setAttribute("placeholder", "0");

const displayContainer = document.createElement("div");
displayContainer.appendChild(display);

const buttonAC = document.createElement("button");
buttonAC.innerText = "AC";
buttonAC.setAttribute("id", "clear");
buttonAC.setAttribute("onclick", "display.value = ''");
buttonAC.setAttribute("class", "buttons");

const buttonDE = document.createElement("button");
buttonDE.innerText = "DE";
buttonDE.setAttribute("id", "button-DE");
buttonDE.setAttribute(
  "onclick",
  "display.value = display.value.toString().slice(0,-1)"
);
buttonDE.setAttribute("class", "buttons");

const buttonPercentage = document.createElement("button");
buttonPercentage.innerText = "%";
buttonPercentage.setAttribute("onclick", "display.value = '%' ");
buttonPercentage.setAttribute("id", "button-percent");
buttonPercentage.setAttribute("class", "buttons");

const buttonDivide = document.createElement("button");
buttonDivide.innerText = "/";
buttonDivide.setAttribute("onclick", "display.value += '/' ");
buttonDivide.setAttribute("id", "button-Divide");
buttonDivide.setAttribute("class", "buttons");

const buttonContainer1 = document.createElement("div");
buttonContainer1.appendChild(buttonAC);
buttonContainer1.appendChild(buttonDE);
buttonContainer1.appendChild(buttonPercentage);
buttonContainer1.appendChild(buttonDivide);

const button7 = document.createElement("button");
button7.innerText = "7";
button7.setAttribute("id", "7");
button7.setAttribute("onclick", "display.value += '7'");
button7.setAttribute("class", "buttons");

const button8 = document.createElement("button");
button8.innerText = "8";
button8.setAttribute("id", "8");
button8.setAttribute("onclick", "display.value += '8'");
button8.setAttribute("class", "buttons");

const button9 = document.createElement("button");
button9.innerText = "9";
button9.setAttribute("id", "9");
button9.setAttribute("onclick", "display.value += '9'");
button9.setAttribute("class", "buttons");

const buttonMul = document.createElement("button");
buttonMul.innerText = "*";
buttonMul.setAttribute("id", "Multiply");
buttonMul.setAttribute("onclick", "display.value += '*'");
buttonMul.setAttribute("class", "buttons");

const buttonContainer2 = document.createElement("div");
buttonContainer2.appendChild(button7);
buttonContainer2.appendChild(button8);
buttonContainer2.appendChild(button9);
buttonContainer2.appendChild(buttonMul);

const button4 = document.createElement("button");
button4.innerText = "4";
button4.setAttribute("id", "4");
button4.setAttribute("onclick", "display.value += '4'");
button4.setAttribute("class", "buttons");

const button5 = document.createElement("button");
button5.innerText = "5";
button5.setAttribute("id", "5");
button5.setAttribute("onclick", "display.value += '5'");
button5.setAttribute("class", "buttons");

const button6 = document.createElement("button");
button6.innerText = "6";
button6.setAttribute("id", "6");
button6.setAttribute("onclick", "display.value += '6'");
button6.setAttribute("class", "buttons");

const buttonSub = document.createElement("button");
buttonSub.innerText = "-";
buttonSub.setAttribute("id", "subtract");
buttonSub.setAttribute("onclick", "display.value += '-'");
buttonSub.setAttribute("class", "buttons");

const buttonContainer3 = document.createElement("div");
buttonContainer3.appendChild(button4);
buttonContainer3.appendChild(button5);
buttonContainer3.appendChild(button6);
buttonContainer3.appendChild(buttonSub);

const button1 = document.createElement("button");
button1.innerText = "1";
button1.setAttribute("id", "1");
button1.setAttribute("onclick", "display.value += '1'");
button1.setAttribute("class", "buttons");

const button2 = document.createElement("button");
button2.innerText = "2";
button2.setAttribute("id", "2");
button2.setAttribute("onclick", "display.value += '2'");
button2.setAttribute("class", "buttons");

const button3 = document.createElement("button");
button3.innerText = "3";
button3.setAttribute("id", "3");
button3.setAttribute("onclick", "display.value += '3'");
button3.setAttribute("class", "buttons");

const buttonAdd = document.createElement("button");
buttonAdd.innerText = "+";
buttonAdd.setAttribute("id", "add");
buttonAdd.setAttribute("onclick", "display.value += '+'");
buttonAdd.setAttribute("class", "buttons");

const buttonContainer4 = document.createElement("div");
buttonContainer4.appendChild(button1);
buttonContainer4.appendChild(button2);
buttonContainer4.appendChild(button3);
buttonContainer4.appendChild(buttonAdd);

const button0 = document.createElement("button");
button0.innerText = "00";
button0.setAttribute("id", "00");
button0.setAttribute("onclick", "display.value += '00'");
button0.setAttribute("class", "buttons");

const button00 = document.createElement("button");
button00.innerText = "0";
button00.setAttribute("id", "0");
button00.setAttribute("onclick", "display.value += '0'");
button00.setAttribute("class", "buttons");

const buttonDot = document.createElement("button");
buttonDot.innerText = ".";
buttonDot.setAttribute("id", "button-Dot");
buttonDot.setAttribute("onclick", "display.value += '.' ");
buttonDot.setAttribute("class", "buttons");

const buttonEq = document.createElement("button");
buttonEq.innerText = "=";
buttonEq.setAttribute("id", "equal");
buttonEq.setAttribute("class", "buttons");
buttonEq.setAttribute("onclick", "display.value=eval(display.value)");

const buttonContainer5 = document.createElement("div");
buttonContainer5.appendChild(button0);
buttonContainer5.appendChild(button00);
buttonContainer5.appendChild(buttonDot);
buttonContainer5.appendChild(buttonEq);

const calContainer = document.createElement("div");
calContainer.setAttribute("id", "cal-container");
calContainer.appendChild(title);
calContainer.appendChild(description);
calContainer.appendChild(displayContainer);
calContainer.appendChild(buttonContainer1);
calContainer.appendChild(buttonContainer2);
calContainer.appendChild(buttonContainer3);
calContainer.appendChild(buttonContainer4);
calContainer.appendChild(buttonContainer5);

const mainContainer = document.getElementById("container");
mainContainer.appendChild(calContainer);
