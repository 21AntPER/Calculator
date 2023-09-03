/* @ DISPLAYS */
const previousOperand = document.getElementById("previousOperand");
const currentOperand = document.getElementById("currentOperand");

/* @ OPERANDS */

const operandButtons = document.getElementsByClassName("operands")

/* @ BUTTONS */
const allClear = document.getElementById("allClearbutton")
const clear = document.getElementById("clearButton")
const solveButton = document.getElementById("solveButton")

/* @ NUMPAD */
const numPadButton = document.getElementsByClassName("numPadKeys")

function calc(equation) {
    if (
        equation.split("÷").length <= 1 &&
        equation.split("%").length <= 1 &&
        equation.split("×").length <= 1 &&
        equation.split("+").length <= 1 &&
        equation.split("-").length <= 1
    ) {
        return
    } else {
        var previousOperator;
        previousOperator = equation.replace(/[0-9]/g, "")
        if (equation.includes(".")) {
            console.log("includes")
            previousOperator = previousOperator.replace(".", "")
        }
    
        var answer;

        if (previousOperator === "÷") {
            answer = Number(equation.split("÷")[0]) / Number(equation.split("÷")[1])
        } else if (previousOperator === "%") {
            answer = Number(equation.split("%")[0]) % Number(equation.split("%")[1])
        } else if (previousOperator === "×") {
            answer = Number(equation.split("×")[0]) * Number(equation.split("×")[1])
        } else if (previousOperator === "+") {
            answer = Number(equation.split("+")[0]) + Number(equation.split("+")[1])
        } else if (previousOperator === "-") {
            answer = Number(equation.split("-")[0]) - Number(equation.split("-")[1])
        }
        return answer
    }
}

for (i of numPadButton) {
    i.onclick = (e) => {
        if (e.target.textContent === "." && currentOperand.innerHTML.includes(".")) {
            return
        } 
        currentOperand.innerHTML += e.target.textContent
    }
    
}

for (i of operandButtons) {
    i.onclick = (e) => {
        if (currentOperand.innerHTML === "") {
            return
        }
        previousOperand.innerHTML += currentOperand.innerHTML
        var equation = previousOperand.textContent
        if (calc(equation) != undefined) {
            previousOperand.innerHTML = calc(equation)
        }
        previousOperand.innerHTML += e.target.textContent
        currentOperand.innerHTML = ""
    }
}

solveButton.onclick = () => {
    var equation = previousOperand.innerHTML + currentOperand.innerHTML
    currentOperand.innerHTML = calc(equation)
    previousOperand.innerHTML = ""
}

allClear.onclick = () => {
    currentOperand.innerHTML = ""
    previousOperand.innerHTML = ""
}

clear.onclick = () => {
    if (currentOperand.innerHTML === "") {
        currentOperand.innerHTML = previousOperand.innerHTML
        previousOperand.innerHTML = ""
    } else {
        currentOperand.innerHTML = currentOperand.innerHTML.slice(0, -1)
    }
}