function welcomeUser() {
    const firstname = document.getElementById("name").value;
    const lastname = document.getElementById("lastname").value;
    document.getElementById("welcome").innerText =
        "Welcome " + firstname + " " + lastname;
    const inputs = document.getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }
}