let senha = '';

function login() {

do {
    senha = prompt("Insira sua senha");

    if (senha == "2112") {
        alert("Entrando =)");
        
    }

    else {
        alert("Senha incorreta =(");
    }

} while (senha !== "2112");

}







