var prompt= require("prompt-sync")()

var nome = prompt("Digite seu nome: ");
var horario = prompt("É manhã, tarde ou noite ? ");

if(horario =="tarde"){
    console.log("Boa tarde, " + nome)
}else if(horario =="manha") {
    console.log("Bom dia, " + nome)
}else if(horario =="noite"){
    console.log("Boa noite, " + nome)
}else {
    console.log("???")
}


let nome1 = prompt("Digite seu nome:")
let horario1 = prompt("É manha, tarde ou noite?")

if (  horario1 != "tarde"  && horario1 != "manha" && horario1 !="noite")
    { console.log("OPCAO INVALIDA")}

else if (horario1 == "manha") 
    { console.log("Bom dia, " + nome1)}

else if(horario1 == "tarde")
    { console.log("Boa tarde, " + nome1)}

else if(horario1 == "noite")
    { console.log("Boa noite, " + nome1)}


let nome2 = prompt("Digite seu nome:")
let horario2 = prompt("É manha, tarde ou noite?")

if (horario2 == "manha"  || horario2 == "tarde" || horario2 == "noite")
    {
        if(horario2 == "manha") {console.log (`Bom dia, ${nome2}`)}   //usando template literals
        
        if(horario2 == "tarde") {console.log (`Boa tarde, ${nome2}`)} //p/ melhor organização
        
        if(horario2 == "noite") {console.log (`Boa noite, ${nome2}`)} 
    }
    else {console.log("OPÇÃO INVÁLIDA!!")}
