//Essa funcao vai ser responsavel por verificar o tamanho da janela e atualizar.
let altura = 0;
let largura = 0;
let Tempo = 60;
let vidas = 1;

let alturadefault = '640px';
let larguradefault = '620px';

let nivel = window.location.search;
nivel = nivel.replace('?', '');
let Criamosquitotempo = 0;

if(nivel === 'crianca'){
    Criamosquitotempo = 2000;
}
if(nivel === 'normal'){
    Criamosquitotempo = 1000;
}
if(nivel === 'dificil'){
    Criamosquitotempo = 800;
}
if(nivel === 'insano'){
    Criamosquitotempo = 500;
}

 AjustaTamanhoGame = () =>{
 altura = window.innerHeight;
 largura = window.innerWidth;
}
AjustaTamanhoGame();

let cronometro = setInterval(function(){
    //Vai decrementar o tempo.
   
    Tempo -= 1;
    if(Tempo < 0){
        clearInterval(cronometro);
        clearInterval(criamosca);
        window.location.href = 'vitoria.html';
    }else{
        document.getElementById('cronometro').innerHTML = Tempo;
    }
}, 1000);

function PosicaoRandomica(){

    //Remover o mosquito anterior caso exista
    if(document.getElementById('mosquito')){
         document.getElementById('mosquito').remove();
        if(vidas > 3){
            //Aqui o game acaba(Game over!)
            window.location.href = 'fim-de-jogo.html';

        }
        else{
            document.getElementById('vida' + vidas).src="./imagens/coracao_vazio.png";
            vidas++;
        }
    }

let posicaoX = Math.floor(Math.random()* largura)  - 200;
let posicaoY = Math.floor(Math.random()* altura ) - 200;

posicaoX = posicaoX < 0 ? 0 : posicaoX;
posicaoY = posicaoY < 0 ? 0 : posicaoY;
console.log(posicaoX, posicaoY);

let mosquito = document.createElement('img');
document.body.appendChild(mosquito);
mosquito.src = 'imagens/mosca.png';
    if(mosquito.style.height === alturadefault && mosquito.style.width === larguradefault){
        document.getElementById('mosquito').remove();
    }
mosquito.className = TamanhoRandomico() + ' ' + LadoAleatorio();
mosquito.id = 'mosquito';
mosquito.onclick = function(){
    this.remove();
}

//Atribuindo as posicoes ao mosquito.
mosquito.style.left = posicaoX + 'px';
mosquito.style.top = posicaoY + 'px';

//Para que ele possa se posicionar dentro da tela, deve ser definido como position absolute;
    mosquito.style.position = 'absolute';
    
}

 TamanhoRandomico = () => {
let classe = Math.floor(Math.random() * 3);
    switch (classe) {
        case 0:
            return 'mosquito0';
 
        case 1:
           return 'mosquito1';

        case 2:
           return 'mosquito2';

        case 3:
            return 'mosquito3';
    
        case 4:
            return 'mosquito4';
        
            default:
                return 'mosquito2';
    }
}

 LadoAleatorio = () =>{
    let Lado = Math.floor(Math.random() * 2);

    if(Lado == 0){
        return 'LadoA';
    }
    if(Lado == 1){
        return 'LadoB'
    }
    
 }
