let person = {
    name: "Arturs",
    lastname: "Olekss"
}

let person1 = {
    name: "Arturs",
    lastname: "Olekss"
}

person.getFullName = function() {
    return this.name + " " + this.lastname;
}