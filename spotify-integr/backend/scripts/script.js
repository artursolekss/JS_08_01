const signIn = () => {
    const client_id = $("#clientID").val();
    const client_secret = $("#clientSecret").val();
    const url = "http://localhost:5000/login?client_id=" +
        client_id + "&client_secret=" + client_secret;
    $.get(url, (data, status) => {
        console.log(status);
        console.log(data);
    })
}


//On load
$(function() {
    $("#signidBtn").on("click", signIn);
});