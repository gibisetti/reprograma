function media() {
    let nota1 = parseFloat(document.getElementById('nota1').value);
    let nota2 = parseFloat(document.getElementById('nota2').value);

    let resultado = (nota1 + nota2) / 2;

if (resultado > 9 ) {
    alert("Aprovada com distinção");
}

else if (resultado >=7 && resultado <=9) {
    alert("Aprovada");
}

else { 
    alert("Reprovada, sua média foi " + resultado + " =(");
}

}
