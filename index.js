

function encriptar() {
    let textoinicial = document.getElementById("ingresotexto").value.toLowerCase();

    let textCifrado = textoinicial.replace(/e/igm, "enter");
    textCifrado = textCifrado.replace(/o/igm, "ober");
    textCifrado = textCifrado.replace(/i/igm, "imes");
    textCifrado = textCifrado.replace(/a/igm, "ai");
    textCifrado = textCifrado.replace(/u/igm, "ufat");

    document.getElementById("salidatexto").innerHTML = textCifrado;

}

copiar.onclick = copiartexto;
function copiartexto() {
    navigator.clipboard.writeText(salidatexto.value);
    copiar.innerText = 'COPIADO';
}

function desencriptar() {
    let textoinicial = document.getElementById("ingresotexto").value.toLowerCase();

    let textCifrado = textoinicial.replace(/enter/igm, "e");
    textCifrado = textCifrado.replace(/ober/igm, "o");
    textCifrado = textCifrado.replace(/imes/igm, "i");
    textCifrado = textCifrado.replace(/ai/igm, "a");
    textCifrado = textCifrado.replace(/ufat/igm, "u");

    document.getElementById("salidatexto").innerHTML = textCifrado;

}   