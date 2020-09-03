var carros = ["Gol", "Palio","Uno"];
console.log (carros);

 var primeirocarro =carros[0];
 var segundocarro = carros[1];
 var terceirocarro = carros[2];


console.log("primeira posicao" + "primeiro carro");
console.log("segunda posicao" + "segundo carro");
console.log("terceira posicao" + "terceiro carro");

carros[2] = " Argo"
console.log(carros[2]);

console.log(terceirocarro);

console.log ("tamanho do array" + "carros.length");
console.log("ultimo elemento do array:" + carros[carros.length -1]);

carros[3] = "Sandero";
console.log("ultimo elemento do array:" + carros[carros.length -1]);

carros[carros.length]= "Fit";
console.log("ultimo elemento do array:" + carros[carros.length -1]);

carros.push("Polo");
console.log(carros);

carros.push(123);
console.log(carros);




