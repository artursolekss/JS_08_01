function getResult() {
    const nAnError = "The values provided should be the numbers";
    const resultElement = document.getElementById("result");
    const num1 = $("#number1").val(); //document.getElementById("number1").value;
    const num2 = $("#number2").val(); //document.getElementById("number2").value;
    const operation = $("#operationSelected").val();
    switch (operation) {
        case "+":
            if (isNaN(num1) || isNaN(num2))
                resultElement.innerText = (num1 + num2);
            else
                resultElement.innerText = Number(num1) + Number(num2);
            break;
        case "-":
            if (!isNaN(num1) && !isNaN(num2))
                resultElement.innerText = Number(num1) - Number(num2);
            else
                resultElement.innerText = nAnError;
            break;
        case "/":
            if (!isNaN(num1) && !isNaN(num2))
                resultElement.innerText = Number(num1) / Number(num2);
            else
                resultElement.innerText = nAnError;
            break;
        case "*":
            if (!isNaN(num1) && !isNaN(num2))
                resultElement.innerText = Number(num1) * Number(num2);
            else
                resultElement.innerText = nAnError;
            break;
    }

    // clearAllInputs();
}

function clearAllInputs() {
    const inputs = document.getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++)
        inputs[i].value = "";
}

function setOperatorSelected(e, operation) {
    console.log(e);
    document.getElementById("operationSelected").value = operation;
    const allButtons = document.getElementsByClassName("btn-primary");
    for (let i = 0; i < allButtons.length; i++)
        allButtons[i].classList.remove("btn-primary");
    e.srcElement.classList.add("btn-primary");
}