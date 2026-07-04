$(document).ready(function () {

let transactions =
    JSON.parse(
        localStorage.getItem("tx")
    ) || [];

if (transactions.length === 0) {

    $("#list").html(
        "<p class='text-center'>No hay movimientos registrados.</p>"
    );

    return;
}

transactions.reverse();

transactions.forEach(function (transaction) {

    $("#list").append(
        `
        <div class="card mb-3 p-3">
            <h5>${transaction.type}</h5>
            <p class="mb-1">
                Monto: $${transaction.amount}
            </p>
            <small>
                Fecha: ${transaction.date}
            </small>
        </div>
        `
    );

});

});
