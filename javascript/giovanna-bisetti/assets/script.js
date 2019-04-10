var nomes = [
    'uma deusa',
    'uma louca',
    'uma feiticeira',
];


function mudarNome () {
    var random = Math.floor(Math.random() * 3);
    document.getElementById('apresentacao__titulo').innerHTML = nomes [random]
};

