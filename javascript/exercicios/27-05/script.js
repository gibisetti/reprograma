// Exercícios:

// 1º exercício
// Crie uma função que leia um valor e exiba se ele é par ou ímpar.


function y (x){
    if (x % 2 == 0){
        console.log(x + " é par");
    }
    else {
        console.log (x + " é ímpar");
    }
}

// 2º exercício
// Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:

// function pares(x, y) {
//   // código aqui
// }

// pares(32, 321);

// crie um for para percorrer o intervalo, e dentro dele verifique se o número é par ou não, conforme exercício 1


function pares (x, y){
    for (i = x ; i <= y ; i++){
        if (i % 2 ==0){
            console.log(i);
        }
    }
}

// 3º exercício
// Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é:

// function experiencia(anos) {
//   // código aqui
// }

// var anosEstudo = 7;
// experiencia(anosEstudo);

// // De 0-1 ano: Iniciante
// // De 1-3 anos: Intermediário
// // De 3-6 anos: Avançado
// // De 7 acima: Jedi Master


function anos (x){
    if (x >= 0 && x <= 1) {
        console.log ("é iniciante");
    }
    else if (x >= 1 && x <=3) {
        console.log ("é intermediário");
    }
    else if (x >= 3 && x < 7) {
        console.log ("é avançado");
    }
    else if (x >= 7) {
        console.log ("Jedi master");
    }
}



// 4º exercício
// Crie um arquivo html que contenha uma lista com nomes, e a partir destes gere uma ul, onde cada li será gerado apresentando os nomes. Exemplo:

// var nomes = ["aaa", "bbb", "ccc"];

// * aaa
// * bbb
// * ccc





// 5º exercício
// A partir do exercício 3, adicione um input e um botão, na qual seja possível inserir um valor, ao clicar no botão, o value do input deverá ser adicionado à lista e inserido na ul.