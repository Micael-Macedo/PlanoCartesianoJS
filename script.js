
// Obtém o canvas do HTML5
var canvas = document.getElementById("arcCanvas")
var ctx = canvas.getContext("2d");

// Define as constantes da equação do segundo grau
var a = 1;
var b = 2;
var c = -3;

// Define o intervalo de x que deseja plotar
var xMin = -5;
var xMax = 5;

// Define o incremento de x
var dx = 0.1;

// Define as variáveis para armazenar os pontos x e y
var x, y;

// Define a cor e a largura da linha do gráfico
ctx.strokeStyle = "black";
ctx.lineWidth = 2;

criarPlanoCartesiano();
gerarEquacao();


function gerarEquacao() {
    ctx.strokeStyle = "red";
    ctx.beginPath();
    for (x = xMin; x <= xMax; x += dx) {
        y = a * x * x + b * x + c;
        ctx.lineTo(canvas.width / 2 + x * 50, canvas.height / 2 - y * 50);
    }
    ctx.stroke();
}

function criarPlanoCartesiano() {
    // Desenha o eixo x
    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2);
    ctx.lineTo(canvas.width, canvas.height / 2);
    ctx.stroke();

    // Desenha o eixo y
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.stroke();
}

