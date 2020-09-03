// Listar todos os numeros primos menores ou igual a um determinando numero 
//Numero primo;só é divisivel por dois numeros,por 1 e  por ele mesmo
// x é divisivel por y: resto da divisao de x por y é igual  0

// definido diretamente em uma variavel
// var numero = x 
function testaNumero(num) {
    
    var arrayRetorno = []
    for (x = 1; x <= num; x++) {
        if(isPrimo(x) === true) {
            arrayRetorno.push(x)
        }
    }

    console.log(arrayRetorno)

}

function isPrimo(num) {
   var arrayRetorno = []
   //console.log("Numero Entrada: " + num)

   for(i = 1; i <= num; i++) {
    
        var resto = num % i
        if(resto === 0) {
           arrayRetorno.push(i)
        }
   }
   
   if(arrayRetorno.length === 2) {
       console.log(true)
       return true
   }else {
       console.log(false)
       return false
   }
}

//isPrimo(18)
testaNumero(80)