const contacts = [];

let btnCrear = document.getElementById("btncrear");

btnCrear.addEventListener('click', addContact);

function addContact() {
    let inputName = document.getElementById("name");
    let inputPhone = document.getElementById("phone");
    let mjs = document.getElementById("mensaje");

    let name = inputName.value
    let phone = inputPhone.value

    if (name == "" || phone == "") {
        mjs.textContent = "Todos los campos son obligatorios";
        return;
    }
    if (isNaN(phone)) {
        mjs.textContent = "telefono debe ser numerico"
        return;
    }

    contacts.push({ name, phone });
    showContacts()

    mjs.textContent = "Contacto agregado correctamente";
}


function showContacts() {
    let tablet = document.getElementById("tabla")
    tablet.innerHTML = "";

    for (let i = 0; i < contacts.length; i++) {
        let row = document.createElement("tr")

        row.innerHTML = `
        <td>${contacts[i].name}</td>
        
        <td>${contacts[i].phone}</td>
        `;
        tablet.appendChild(row);

    }
}