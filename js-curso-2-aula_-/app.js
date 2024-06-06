//return é daora legal, ele retorna o valor da função e jogará no meu número secretx!!!
let numeroSecreto = gerarNumeroSecreto();
console.log(numeroSecreto);
let tentativa = 0;
 
function exibirTextoNaTela(tag,texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function exibirTextoInicial(){
    exibirTextoNaTela("h1","Jogo do numero secreto");
    exibirTextoNaTela("p","Insira, de 1 a 10, para acertar o número secreto");
}
 
exibirTextoInicial()
function validarChute(){
    let chute = document.querySelector("input").value;
    tentativa++;
    let palavraTentativa = tentativa > 1 ? "tentativas" : "tentativa";
    if (chute == numeroSecreto) {
        exibirTextoNaTela("h1","Parabéns!");
        exibirTextoNaTela("p",`Você acertou o número com ${tentativa} ${palavraTentativa}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        alterarImagem('imagem', '/img/Captura de tela 2024-05-04 092709.png')
    }
    else{
        if (chute < numeroSecreto) {
            exibirTextoNaTela("h1",`O número secreto é maior que ${chute}`);
        } else {
            exibirTextoNaTela("h1", `O número secreto é menor que ${chute}`);
        }
    }
   limparCampo();
}
 
 
function gerarNumeroSecreto() {
    return parseInt(Math.random()*10+1);
}
function limparCampo(){
    chute = document.querySelector(`input`);
    chute.value = "";
}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroSecreto();
    tentativa = 0;
    exibirTextoInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true)
    alterarImagem('imagem','Captura de tela 2024-04-05 092709.png')
}

function alterarImagem(objeto, caminhoImagem){
    document.getElementById(objeto).src = caminhoImagem;
}