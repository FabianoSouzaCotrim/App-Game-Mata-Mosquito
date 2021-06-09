var altura = 0;
var largura = 0;
var vidas = 3;
var tempo = 30;

var criarMosquitoTempo = 1500;
var nivel = window.location.search;
nivel = nivel.replace("?", "");
if (nivel === "normal") {
    criarMosquitoTempo = 1500;
} else if (nivel === "dificil") {
    criarMosquitoTempo = 1000;
} else if (nivel === "muito_dificil") {
    criarMosquitoTempo = 750;
}

function redimencionamento_tela() {
    altura = window.innerHeight;
    largura = window.innerWidth;

    console.log(largura, altura);
}

var cronometro = setInterval(function () {
    tempo -= 1;
    if (tempo < 0) {
        clearInterval(cronometro);
        clearInterval(criarMosquito);
        window.location.href = "vitoria.html";
    } else {
        document.getElementById("cronometro").innerHTML = tempo;
    }
}, 1000);

function posicaoRandomica() {
    if (document.getElementById("mosquito")) {
        document.getElementById("mosquito").remove();

        if (vidas == 0) {
            window.location.href = "game_over.html";
        } else {
            document.getElementById("v" + vidas).src = "img/coracao_vazio.png";
            vidas--;
        }
    }
    var posicaoX = Math.floor(Math.random() * largura) - 90;
    var posicaoY = Math.floor(Math.random() * altura) - 90;

    posicaoX = posicaoX < 0 ? 0 : posicaoX; // operador ternário, se posicao x menor que 0 (<) se sim(?) tranforme em 0 se nao(:) tranforme posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY; // operador ternário, ( ? )= se sim  (:) caso contrário resumindo basicamente => verdadeiro (?) e falso (:)

    console.log(posicaoX, posicaoY);

    //criando o elemento em html e estilizando
    var mosquito = document.createElement("img"); // criando e adicionando um elemento a uma variavel
    mosquito.src = "img/mosca.png"; // adicionando o src ao elemento mosquito
    mosquito.className = tamanhoRandomico() + " " + ladoRandomico(); // dando uma classe ao elemento para aplicar o style.css
    mosquito.style.left = posicaoX + "px"; // setando a posicao do elemento na posicaoX
    mosquito.style.top = posicaoY + "px"; // setando a posicao do elemento na posicaoY
    mosquito.style.position = "absolute"; // definindo elemento como absolute
    mosquito.id = "mosquito";
    mosquito.onclick = function () {
        this.remove();
    };
    document.body.appendChild(mosquito); // incluindo o elemento na pagina(body) com (appendchild) mosquito
}

function tamanhoRandomico() {
    //função para tamanho randomico do mosquito
    var classe = Math.floor(Math.random() * 3); //criando um numero aleatório(0 ao 1) multiplicado por 3 e arrendondado com math.floor()
    /////////////////IMPORTANTE Math.floor arredonda para baixo

    console.log(classe);

    switch (
        classe //case para fazer a escolha do nome da classe
    ) {
        case 0:
            return "mosquito1";
        case 1:
            return "mosquito2";
        case 2:
            return "mosquito3";
    }
}

function ladoRandomico() {
    var lado = Math.floor(Math.random() * 2);

    switch (lado) {
        case 0:
            return "ladoA";

        case 1:
            return "ladoB";
    }
}
