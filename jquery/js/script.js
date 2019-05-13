
function mudaTextoLi(){
    if($('li').lenght > 0 ){
    console.log($('.lista1 .botao').text());
    }
}


$(document).ready(function(){
    alert("carregou");
    mudaTextoLi();
});