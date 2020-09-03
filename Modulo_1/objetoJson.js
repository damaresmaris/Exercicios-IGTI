var pessoa = {
"nome":"Joao",
idade: 40,
telefone: "(99)9999-9999",
temCarro: true,
AnimaisdeEstimacao: [
  "totó",
  "Bob",

],

pai:{
  Nome:"José",
  idade: 68
}
  
  
};
//console.log(pessoa.AnimaisdeEstimacao);
//console.log(pessoa.nome);
//console.log(pessoa.pai.nome);
//pessoa.AnimaisdeEstimacao.push("Billy");
//pessoa.nome += " Silva";
//console.log(pessoa);
pessoa.mae = {  
    nome:" Maria",
    idade:68

};
    console.log(JSON.stringify(pessoa));

  

//salvarDadosPessoa(pessoa);

    //function salvarDadosPessoa(pessoa) {

    //console.log(pessoa);

