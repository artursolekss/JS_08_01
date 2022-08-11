function getResult() {
    const nAnError = "The values provided should be the numbers";
    const resultElement = $("#result");
    const num1 = $("#number1").val(); //document.getElementById("number1").value;
    const num2 = $("#number2").val(); //document.getElementById("number2").value;
    const operation = $("#operation").val();
    switch (operation) {
        case "+":
            if (isNaN(num1) || isNaN(num2))
                resultElement.text(num1 + num2);
            else
                resultElement.text(Number(num1) + Number(num2));
            break;
        case "-":
            if (!isNaN(num1) && !isNaN(num2))
                resultElement.text(Number(num1) - Number(num2));
            else
                resultElement.text(nAnError);
            break;
        case "/":
            if (!isNaN(num1) && !isNaN(num2))
                resultElement.text(Number(num1) / Number(num2));
            else
                resultElement.text(nAnError);
            break;
        case "*":
            if (!isNaN(num1) && !isNaN(num2))
                resultElement.text(Number(num1) * Number(num2));
            else
                resultElement.text(nAnError);
            break;
    }

    // clearAllInputs();
}

function clearAllInputs() {
    const inputs = document.getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++)
        inputs[i].value = "";
}