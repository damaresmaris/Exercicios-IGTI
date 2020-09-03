
var fs = require("fs");
var nomearquivo = "meuarquivo.txt"
var x ;
if (x) {
console.log("x tem valor");
} else { 
   
  //console.log("x nao tem valor");

}

fs.writeFile( nomearquivo, "um texto qualquer",function(err) {
    if (err !== null) {
        console.log(err);
    } else { 
        fs.appendFile( nomearquivo, "\nnova linha no texto", function(err) {
            if (err) {
                console.log(err)
            } else {   
                fs.readFile(nomearquivo, "utf-8",function(err, data) {  
                    if (err) {
                        console.log(err)
                    } else {  
                        console.log(data); 
                    }
                });
            }
        })
             
   }
});




