/*  Criar um jogo no qual o jogador tenha que adivinhar um número. 
O jogo deve gerar um numero aleatorio de 1 a 100,
 e depois desafiar o jogador a descobrir qual o numero no maximo de 10 tentativas
A cada tentativa, caso o jogador , não tenha acertado o numero , o jogo
 deve informar se o numero informado é maior ou menor que o sorteado.
o jogo termina se o jogador acertar o numero ou acabarem os numeros de tentativas


1) Gerar um numero aleatorio entre 1 e 100
2) Inicializar o numero de tentativas como 10
3) Pedir ao jogador para tentar adivinhar o numero
4) Decrementar o numero de tentativas 
5) Verificar se tentativa esta correta 
6) Se estiver correta:
    - Informar que acertou o numero     
    - Encerrar o jogo
7) Se estiver incorreta e acabaram as tentativas
    - Informar que ele nao venceu 
    - Encerrar o jogo 
8) Se estiver incorreta e ainda restam tentativas
    - Informar se a tentativa é maior ou menor que o numero sorteado
    - Pedir outra tentativa para o jogador



*/
var readline = require('readline')
var numeroAleatorio = Math.round(Math.random() * 100) //gera o numero de 1 a 100
var numeroTentativas = 10 //inicializa o número de tentativas

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

console.log(numeroAleatorio)
pergunta()

function pergunta() {

    rl.question("Digite um número: ", function(numero) {
        numero = parseInt(numero)
        numeroTentativas--;
        if(numero === numeroAleatorio) {
            console.log('Parabéns, você acertou o numero!')
        } else if(numeroTentativas === 0)  { //condição quando as tentativas acabam 
            console.log( "numero de tentativas acabaram")

        } else if( numero > numeroAleatorio) { //condicao numero maior que o digitado
            console.log("numero digitado é menor que numero aleatorio. voce ainda tem " + numeroTentativas + "tentativas")
            pergunta()
        } else { //numero menor que o digitado
            console.log("numero digitado é maior que numero aleatorio. voce ainda tem " + numeroTentativas + " tentativas")
            pergunta()
        }    
    })
}
