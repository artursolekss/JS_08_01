let result;
// for (;;) {
// while (result === undefined) {
let i = 0;
do {
    // for (let i = 0; i < 9; i++) { //limit number of attempts for the user to provide the correct input
    let value1 = prompt("Please, enter value 1");
    let value2 = prompt("Enter value 2");
    let operation = prompt("Enter operation: +,-,* or / ");

    const notNumbers = isNaN(value1) || isNaN(value2);
    if (operation == "+") {
        result = notNumbers ? (value1 + value2) : (Number(value1) + Number(value2));
        //break;
    } else if (operation == "-") {
        if (notNumbers)
            alert("Subtraction can only be applied to the numbers");
        else {
            result = Number(value1) - Number(value2);
            //  break; //goes out of the loop
        }
    } else if (operation == "*") {
        if (notNumbers)
            alert("Multiplication can only be applied to the numbers");
        else {
            result = Number(value1) * Number(value2);
            // break;
        }
    } else if (operation == "/") {
        if (notNumbers)
            alert("Division can only be applied to the numbers");
        else {
            result = Number(value1) / Number(value2);
            //break;
        }
    } else {
        alert("Operation is not correct");
    }
}
while (result === undefined || i++ < 10);
// if (result != undefined)
alert("Result is " + result);
// else
//     alert("Too many attempts");