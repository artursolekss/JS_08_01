function addElement() {
    const container = document.getElementsByClassName("container")[0];
    const element = document.createElement("h1");
    element.textContent = "Element added";
    container.appendChild(element);
}

function onLoad() {
    alert("Body is loaded");
}