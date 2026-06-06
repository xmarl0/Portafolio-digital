let btnGenerar = document.getElementById("btngenerar");

btnGenerar.addEventListener('click', generarTabla);

function generarTabla() {
    let inputNumero = document.getElementById("numero");
    let mjs = document.getElementById("mensaje");

    let numero = inputNumero.value;

    if (numero == "") {
        mjs.textContent = "Debe ingresar un número";
        return;
    }

    if (isNaN(numero)) {
        mjs.textContent = "El valor debe ser numérico";
        return;
    }

    mostrarTabla(numero);
    mjs.textContent = "Tabla generada correctamente";
}

function mostrarTabla(numero) {
    let tablet = document.getElementById("tabla");
    tablet.innerHTML = "";

    for (let i = 1; i <= 10; i++) {
        let row = document.createElement("tr");

        row.innerHTML = `
        <td>${numero} x ${i}</td>
        <td>${numero * i}</td>
        `;

        tablet.appendChild(row);
    }
}