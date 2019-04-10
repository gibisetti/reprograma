var elogios = [
    "Diva sem defeitos",
    "Não é github mas é gatinho",
    "Máquina de vencer",
    "Universal",
    "Ícone incompreendido",
    "Responsivo #SQN",
    "Maravilindo",
    "Fada sensata",
    "Cristal",
    "Maravigold",
    "Zero defeitos",
    "Joia rara",
    "Bombonzinho",
    "Um neném",
    "Um pão",
];

function elogiar(){
    var random = Math.floor(Math.random () * elogios.length);
    document.getElementById("titulo").innerHTML = elogios[random];
}

