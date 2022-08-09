let stringDate = prompt("Enter the date as yyyy-mm-dd");
let dateArr = stringDate.split("-");
let dateObj = new Date(stringDate);
let dateNotCorrect = false;
if (dateArr[2] != dateObj.getDate() || dateArr[1] != (dateObj.getMonth() + 1) ||
    dateArr[0] != dateObj.getFullYear()) {
    alert("Date is not correct");
    dateNotCorrect = true;
}

if (!dateNotCorrect) {
    let result;
    switch (dateObj.getMonth()) {

        case 0:
            if (dateObj.getDate() < 21)
                result = "Capricorn";
            else
                result = "Aquarius";
            break;
            ////.same for other cases
    }
    alert("Zodiak is " + result);
}