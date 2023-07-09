function tocarSons(idAudio){
    document.querySelector(idAudio).play();
}

const listaBotoes = document.querySelectorAll('.player');

var repeticao = 0;

while (repeticao < listaBotoes.length) {
    
const botao = listaBotoes[repeticao];
const instrumento = botao.classList[1];

console.log(instrumento);

botao.onclick = function (){
    tocarSons('#som_' + instrumento);
}

repeticao++;

console.log(repeticao);

}
