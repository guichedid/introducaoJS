prompt = require("prompt-sync")()
console.log("Escolha a sua bebida:");
console.log("1. Água");
console.log("2. Suco");
console.log("3. Refrigerante");
console.log("4. Café");

const bebida = parseInt(prompt("Digite o número da sua escolha: "));

switch (bebida) {
  case 1:
    console.log("Aqui está sua Água");
    break;
  case 2:
    console.log("Aqui está seu Suco");
    break;
  case 3:
    console.log("Aqui está seu Refrigerante");
    break;
  case 4:
    console.log("Aqui está seu Café");
    break;
  default:
    console.log("Opção inválida");
    break;
}

 /////////////////////////////////////////////////////

console.log("\nEscolha a operação matemática:");
console.log("1. Soma");
console.log("2. Subtração");
console.log("3. Multiplicação");
console.log("4. Divisão");

const operacao = parseInt(prompt("Digite o número da operação: "));
const numero1 = parseFloat(prompt("Digite o primeiro número: "));
const numero2 = parseFloat(prompt("Digite o segundo número: "));

switch (operacao) {
  case 1:
    console.log("Resultado da soma: " + (numero1 + numero2));
    break;
  case 2:
    console.log("Resultado da subtração: " + (numero1 - numero2));
    break;
  case 3:
    console.log("Resultado da multiplicação: " + (numero1 * numero2));
    break;
  case 4:
    if (numero2 !== 0) {
      console.log("Resultado da divisão: " + (numero1 / numero2));
    } else {
      console.log("Divisão por zero não é permitida.");
    }
    break;
  default:
    console.log("Opção inválida");
    break;
}
 
/////////////////////////////////////////////////////
 
console.log("\nTradução de Cores:");
const cor = prompt("Digite o nome da cor em inglês (red, blue, green): ").toLowerCase();

switch (cor) {
  case "red":
    console.log("vermelho");
    break;
  case "blue":
    console.log("azul");
    break;
  case "green":
    console.log("verde");
    break;
  default:
    console.log("Cor desconhecida");
    break;
}

////////////////////////////////////////////////

console.log("Escolha o tipo de evento:");
console.log("1. Workshop");
console.log("2. Palestra");
console.log("3. Hackathon");

const opcao = 1;

let tipoEvento = "";
let custoTotal = 0;

switch (opcao) {
  case 1: 
    tipoEvento = "Workshop";
    const participantes = 20; 
    custoTotal = participantes * 50;
    console.log(`Tipo de evento: ${tipoEvento}`);
    console.log(`Número de participantes: ${participantes}`);
    break;

  case 2: 
    tipoEvento = "Palestra";
    const duracao = 3; 
    custoTotal = duracao * 100;
    console.log(`Tipo de evento: ${tipoEvento}`);
    console.log(`Duração: ${duracao} horas`);
    break;

  case 3: 
    tipoEvento = "Hackathon";
    const dias = 2; 
    const equipes = 5; 
    custoTotal = dias * equipes * 500;
    console.log(`Tipo de evento: ${tipoEvento}`);
    console.log(`Número de dias: ${dias}`);
    console.log(`Número de equipes: ${equipes}`);
    break;

  default: 
    console.log("Opção inválida");
    break;
}

if (custoTotal > 0) {
  console.log(`Custo total: R$ ${custoTotal}`);
}
