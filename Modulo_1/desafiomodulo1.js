//1) Função que retorna o nome do funcionário que tem o maior salário da empresa. ok 
//2) Função que retorna o nome do funcionário que tem o menor salário da empresa. ok
//3) Função que retorna a média salarial da empresa.  ok
//4) Função que recebe um setor como parâmetro e retorna o funcionário de maior salário do
//setor informado. ok
// 5) Função que recebe um setor como parâmetro e retorna o funcionário de menor salário
//do setor informado. ok
//6) Função que recebe um setor como parâmetro e retorna a média salarial do setor
//informado ok

var funcionarios = require("./funcionarios.json")

function maiorSalarioEmpresa() {
    var funcionariosArray = funcionarios.funcionarios
    var funcionarioMaiorSalario
    var maiorSalario = 0 

    for(i=0; i<funcionariosArray.length; i++ ){
         //console.log(funcionariosArray[i].nome)
        if(maiorSalario < funcionariosArray[i].salario) {
            maiorSalario = funcionariosArray[i].salario
            funcionarioMaiorSalario = funcionariosArray[i]
        }
    }
    console.log(funcionarioMaiorSalario)
}
//maiorSalarioEmpresa()

function menorSalariodaEmpresa() {
    var funcionariosArray = funcionarios.funcionarios
    var funcionarioMenorSalario
    var menorSalario 

    for(i=0; i<funcionariosArray.length; i++ ){

        if(i === 0) {
            menorSalario = funcionariosArray[0].salario
            funcionarioMenorSalario = funcionariosArray[0]
        }else {
            if(menorSalario > funcionariosArray[i].salario) {
                menorSalario = funcionariosArray[i].salario
                funcionarioMenorSalario = funcionariosArray[i]
            }
        }

    }
    console.log(funcionarioMenorSalario)
}
//menorSalariodaEmpresa()

function mediaSalarialEmpresa() {
    var funcionariosArray = funcionarios.funcionarios
    var totalFuncionarios = funcionariosArray.length
    var salarioTotal = 0

    for(i=0; i<funcionariosArray.length; i++ ){
        salarioTotal +=funcionariosArray[i].salario
    }

    var mediaSalarial = salarioTotal / totalFuncionarios
    console.log(mediaSalarial)
}
//mediaSalarialEmpresa()

function maiorSalarioSetor(setor) {
    var funcionariosArray = funcionarios.funcionarios
    var maiorSalarioSetor = 0
    var funcionarioMaiorSalarioSetor

    for(i=0; i<funcionariosArray.length; i++ ){
        if(funcionariosArray[i].setor == setor){
            if(funcionariosArray[i].salario > maiorSalarioSetor) {
                maiorSalarioSetor = funcionariosArray[i].salario
                funcionarioMaiorSalarioSetor = funcionariosArray[i]
            }
        }
    }

    console.log(funcionarioMaiorSalarioSetor)
}
//maiorSalarioSetor("Comercial")

function menorSalarioSetor(setor) {
    var funcionariosArray = funcionarios.funcionarios
    var menorSalarioSetor
    var funcionarioMenorSalarioSetor

    for(i=0; i<funcionariosArray.length; i++ ){
        if(funcionariosArray[i].setor == setor){
            if((funcionariosArray[i].salario < menorSalarioSetor) || !menorSalarioSetor) {
                menorSalarioSetor = funcionariosArray[i].salario
                funcionarioMenorSalarioSetor = funcionariosArray[i]
            }
        }
    }

    console.log(funcionarioMenorSalarioSetor)
}
//menorSalarioSetor("Comercial")

function mediaSalarialSetor(setor) {
    var funcionariosArray = funcionarios.funcionarios
    var totalFuncionariosSetor = 0
    var totalSalarioSetor = 0
    var mediaSalarioSetor

    for(i=0; i<funcionariosArray.length; i++ ){
        if(funcionariosArray[i].setor == setor){
            totalFuncionariosSetor++
            totalSalarioSetor += funcionariosArray[i].salario
        }
    }

    mediaSalarioSetor = totalSalarioSetor / totalFuncionariosSetor
    console.log(mediaSalarioSetor)
}

//mediaSalarialSetor("Comercial")
//menorSalarioSetor("Comercial")
//mediaSalarialEmpresa()
//mediaSalarialSetor("Comercial")