for (var i= 0; i < 10; i++) {
    //console.log (i);
    //console.log(i);
}

var carros =[ "Gol", "Palio", "Uno","Celta", "Sandero" ];

    //do comeco para o final do array 
    for ( var i = 0; i < carros.length; i++) {
        //console.log(carros[i]);
        //console.log(carros[i]);

    } 
//do final para o comeco do array
    for (var i = carros.length -1; i >=0; i--) {
        //console.log (carros[i]);

}

var i = 1;
while (i < carros.length) {
    //console.log(carros[i]);
    i++;

}
 var i = 0;
 while (i < carros.length) {
    console.log(carros[i]);
    if (carros[i] === "Palio") {
        //console.log("Encontrei o Palio");
      //  break;
    }
    i++;

}

   var numeros = [1,2,3,4,5,6,7,8,9,10];
   var i = 0;
    while ( i< numeros.length) {
        var num = numeros[i];
        i++
        if (num % 2 === 0){
           // console.log (num +"é par");
         //   continue;
  }
   
  //.console.log(num + " é impar");
  //..
}

var j = 0;
do {
    j++;
    //console.log(j);
} while(j < 10);


for (var carros of carros) {
    console.log(carros);

}
