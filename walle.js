$(document).ready(function () {

let balance =
    parseFloat(localStorage.getItem("balance")) || 0;

$("#balance").text("$" + balance);

// =====================
// DEPÓSITOS
// =====================
$("#depositBtn").click(function () {

    let amount =
        parseFloat($("#amount").val());

    if (isNaN(amount) || amount <= 0) {

        $("#msg").text(
            "Ingrese un monto válido."
        );

        return;
    }

    balance += amount;

    localStorage.setItem(
        "balance",
        balance
    );

    saveTransaction(
        "Depósito",
        amount
    );

    $("#msg").text(
        "Depósito realizado correctamente."
    );

    $("#amount").val("");
});

// =====================
// ENVÍO DE DINERO
// =====================
$("#sendBtn").click(function () {

    let contact =
        $("#contact").val().trim();

    let amount =
        parseFloat(
            $("#sendAmount").val()
        );

    if (contact === "") {

        $("#msg").text(
            "Ingrese un contacto."
        );

        return;
    }

    if (
        isNaN(amount) ||
        amount <= 0
    ) {

        $("#msg").text(
            "Ingrese un monto válido."
        );

        return;
    }

    if (amount > balance) {

        $("#msg").text(
            "Saldo insuficiente."
        );

        return;
    }

    balance -= amount;

    localStorage.setItem(
        "balance",
        balance
    );

    saveTransaction(
        "Envío a " + contact,
        amount
    );

    $("#msg").text(
        "Transferencia realizada correctamente."
    );

    $("#contact").val("");
    $("#sendAmount").val("");
});

// =====================
// GUARDAR MOVIMIENTOS
// =====================
function saveTransaction(
    type,
    amount
) {

    let transactions =
        JSON.parse(
            localStorage.getItem("tx")
        ) || [];

    let transaction = {
        type: type,
        amount: amount,
        date:
            new Date().toLocaleString()
    };

    transactions.push(
        transaction
    );

    localStorage.setItem(
        "tx",
        JSON.stringify(
            transactions
        )
    );
}

});
