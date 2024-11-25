const prompt = require('prompt-sync')()

let nome = prompt('Digite o nome do aluno: ')
let nota1 = Number(prompt('Digite a primeira nota: '))
let nota2 = Number(prompt('Digite a segunda nota: '))
let nota3 = Number(prompt('Digite a terceira nota: '))
let falta = parseFloat(prompt('Digite a porcentagem de faltas: '))
let resultado
media = ( (nota1+nota2+nota3) /3 ).toFixed(2)

if(media < 5 || falta >= 25)
    { 
        if (media < 5) {console.log ("REPROVADO POR NOTA")}
        if (falta >= 25) {console.log = ("REPROVADO POR FALTA")}
    }
else if( media >= 5 && media < 7 )
    {console.log("RECUPERAÇÃO")}
else 
    {console.log("APROVADO")}
