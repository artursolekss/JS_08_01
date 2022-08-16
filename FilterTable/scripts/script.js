function filter() {
    let brandValue = document.getElementById("brandFilter");
    let colorValue = document.getElementById("colorFilter");
    let allRows =
        document.getElementById("tableRows").getElementsByTagName("tr");

    for (let i = 0; i < allRows.length; i++) {
        let row = allRows[i];
        let columns = row.getElementsByTagName("td");
        let rowBrandVal = columns[0].innerText;
        let rowColorVal = columns[1].innerText;

        if ((brandValue.value === "" ||
                brandValue.selectedOptions[0].innerText === rowBrandVal) &&
            (colorValue.value === "" ||
                colorValue.selectedOptions[0].innerText === rowColorVal))
            row.hidden = false;
        else
            row.hidden = true;
    }
}

function addNewRow() {
    let newBrandVal = document.getElementById("newBrand").value;
    let newColorVal = document.getElementById("newColor").value;
    let newRowElement = document.createElement("tr");
    let newBrandColumn = document.createElement("td");
    newBrandColumn.innerText = newBrandVal;
    let newColColumn = document.createElement("td");
    newColColumn.innerText = newColorVal;
    newRowElement.appendChild(newBrandColumn);
    newRowElement.appendChild(newColColumn);
    document.getElementById("tableRows").appendChild(newRowElement);
    addNewBrandFilter(newBrandVal);
    addNewColorFilter(newColorVal);
}

function addNewColorFilter(color) {
    let colorFilter = document.getElementById("colorFilter");
    let allSelectOption =
        colorFilter.getElementsByTagName("option");
    for (let i = 0; i < allSelectOption.length; i++) //check if the value does not exist already
        if (allSelectOption[i].innerText === color)
            return; //no need to add a new brand (go out of the function)
    let newSelectionOption = document.createElement("option");
    newSelectionOption.innerText = color;
    colorFilter.appendChild(newSelectionOption);
}

function addNewBrandFilter(brand) {
    let brandFilter = document.getElementById("brandFilter");
    let allSelectOption =
        brandFilter.getElementsByTagName("option");
    for (let i = 0; i < allSelectOption.length; i++)
        if (allSelectOption[i].innerText === brand)
            return; //no need to add a new brand (go out of the function)
    let newSelectionOption = document.createElement("option");
    newSelectionOption.innerText = brand;
    brandFilter.appendChild(newSelectionOption);


}