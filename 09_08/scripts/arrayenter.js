let entry = "";
let array = [];
while (entry != "STOP") {
    entry = prompt("Enter array value (enter STOP to stop)");
    if (entry == "STOP")
        break;

    if (!Number(entry)) {
        alert("The entry is not a number");
        continue;
    }
    let number = Number(entry);
    array.push(number);
}

function sortNumberArr(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                let bufferVal = array[j];
                array[j] = array[j + 1];
                array[j + 1] = bufferVal;
            }
        }
    }
    return array;
}

alert(sortNumberArr(array).toString());