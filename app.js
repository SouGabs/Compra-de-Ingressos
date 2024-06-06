let pista = parseInt(document.getElementById('qtd-pista').textContent);
let cadeiraSuperior = parseInt(document.getElementById('qtd-superior').textContent);
let cadeiraInferior = parseInt(document.getElementById('qtd-inferior').textContent);

function comprar(){
    
    let quantidade = parseInt(document.getElementById('qtd').value);
    let tipoDeIngresso = document.getElementById('tipo-ingresso').value;
    
    if (quantidade < 1 || quantidade > 10 || isNaN(quantidade)) {
        alert("Por favor, insira uma quantidade válida entre 1 e 10.");
        return;
    }
    if(tipoDeIngresso == 'superior'){
        comprarSuperior(quantidade);
       }
    if  (tipoDeIngresso == 'pista'){
        comprarPista(quantidade);
       } 
    if (tipoDeIngresso == 'inferior') {
        comprarInferior(quantidade);
    } 
}
function comprarPista(quantidade) {
    
    if (quantidade > pista) {
        alert('Quantidade indisponível para pista!');
    } else {
     pista -= quantidade;
     document.getElementById('qtd-pista').textContent= pista;
     alert('Compra realizada com sucesso!!');
    }
}
function comprarSuperior(quantidade) {
    
    if (quantidade > cadeiraSuperior) {
        alert('Ingressos para cadeira superior esgotaram!!')
    } else {
     cadeiraSuperior -= quantidade;
     document.getElementById('qtd-superior').textContent= cadeiraSuperior;
     alert('Compra realizada com sucesso!!');
    }
}
function comprarInferior(quantidade) {
    
    if (quantidade > cadeiraInferior) {
        alert('Ingressos para comprar inferior esgotaram!!');
    } else {
     cadeiraInferior -= quantidade;
     document.getElementById('qtd-inferior').textContent= cadeiraInferior;
     alert('Compra realizada com sucesso!!');
    }
}
