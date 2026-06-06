function Changecolor(){
    document.getElementById("TextExample").style.color = "red";
}

// Obtener valores
function getValues(){
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    return { n1, n2 };
}

function sumar(){
    let {n1, n2} = getValues();
    document.getElementById("resultado").innerText = "Resultado: " + (n1 + n2);
}

function restar(){
    let {n1, n2} = getValues();
    document.getElementById("resultado").innerText = "Resultado: " + (n1 - n2);
}

function multiplicar(){
    let {n1, n2} = getValues();
    document.getElementById("resultado").innerText = "Resultado: " + (n1 * n2);
}

function dividir(){
    let {n1, n2} = getValues();

    if(n2 === 0){
        document.getElementById("resultado").innerText = "No se puede dividir entre 0";
        return;
    }

    document.getElementById("resultado").innerText = "Resultado: " + (n1 / n2);
}