$(document).ready(function () {

const usuario = {
    email: "admin@alkewallet.com",
    password: "1234"
};

$("#loginBtn").click(function () {

    let email = $("#email").val().trim();
    let password = $("#password").val().trim();

    if (email === "" || password === "") {
        $("#error").text("Debe completar todos los campos.");
        return;
    }

    if (email === usuario.email &&
        password === usuario.password) {

        localStorage.setItem("logged", "true");

        if (localStorage.getItem("balance") === null) {
            localStorage.setItem("balance", "1000");
        }

        if (localStorage.getItem("tx") === null) {
            localStorage.setItem("tx", JSON.stringify([]));
        }

        window.location.href = "menu.html";

    } else {
        $("#error").text("Correo o contraseña incorrectos.");
    }

});

});
