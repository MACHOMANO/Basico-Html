/*
function somarNumeros() {
    let soma = 0;
    let continuar = true;

    while (continuar) { 
        let numero = parseFloat(prompt("digite um número(ou digite '0' para encerrar):"));
        
        if(!isNaN(numero)){
            soma += numero;
        }else {
            alert("por favor, digite um numero válido.");
        }
        continuar = confirm("deseja adicionar mais números?");
    }
    alert("A soma dos números é: " + soma)
}

somarNumeros(); 

function contagem() {

    let secs = parseFloat(prompt("digite quantos segundos para a contagem(ou seila);"));

    if (secs > 0){

        countdownElement.textContent = secs + ' segundos restantes';
        secs--;
        setTimeout(updateCountdown, 1000)
    } else {
        countdownElement.textContent = 'acabou a contagem';
    }
}

function calcularBalançoAnual() {
    let ganhoAnual = 0;
    let gastoAnual = 0;

    for (let i = 1; i <= 12; i++) {
        let ganhoMes = parseFloat(prompt("Digite o ganho bruto do mês " + i + ":"));
        let gastoMes = parseFloat(prompt("Digite os gastos do mês " + i + ":"));

        ganhoAnual += ganhoMes;
        gastoAnual += gastoMes;
    }

    let saldoFinanceiro = ganhoAnual - gastoAnual;

    console.log("Ganho bruto anual: " + ganhoAnual.toFixed(2));
    console.log("Gasto anual: " + gastoAnual.toFixed(2));
    console.log("Saldo financeiro: " + saldoFinanceiro.toFixed(2));

    if (saldoFinanceiro > 0) {
        console.log("A empresa teve lucro.");
    } else if (saldoFinanceiro < 0) {
        console.log("A empresa teve prejuízo.");
    } else {
        console.log("A empresa não teve lucro nem prejuízo.");
    }
}

calcularBalançoAnual(); 

function ordenarDecrescente(a, b) {
    return b - a;
}


let valores = [];
for (let i = 0; i < 4; i++) {
    let valor = parseInt(prompt("Digite o valor " + (i+1) + ":"));
    valores.push(valor);
}

valores.sort(ordenarDecrescente);
console.log("valores em ordem");
valores.forEach(valor => console.log(valor));


function transformarNumero(numero) {
    if (numero % 2 === 0) { 
        return numero + 1; 
    } else {
        return numero - 1; 
    }
}


let numero = parseInt(prompt("Digite um número inteiro:"));


let numeroTransformado = transformarNumero(numero);
console.log("O número transformado é:", numeroTransformado);



function verificarLetra(letra) {
    letra = letra.toLowerCase();

    if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
        console.log("A letra digitada é uma vogal.");
    } else if (letra >= 'a' && letra <= 'z') {
        console.log("A letra digitada é uma consoante.");
    } else {
        console.log("Por favor, digite apenas uma letra do alfabeto.");
    }
}

let letraDigitada = prompt("Digite uma letra do alfabeto:");
if (letraDigitada.length === 1) {
    verificarLetra(letraDigitada);
} else {
    console.log("Por favor, digite apenas uma letra.");
}

*/

function calcularPreco(sabor) {
    switch (sabor) {
        case 'a':
            return 1.50;
        case 'b':
        case 'c':
            return 2.50;
        case 'd':
            return 3.20;
        case 'e':
            return 3.40;
        case 'f':
            return 3.00;
        case 'g':
            return 3.60;
        case 'h':
            return 4.00;
        case 'i':
            return 5.00;
        default:
            return "Sabor não encontrado.";
    }
}


function mostrarPreco() {
    var sabor = prompt("Escolha o sabor do picolé:\n(a) Chocolate\n(b) Morango\n(c) Creme\n(d) Manga\n(e) Melancia\n(f) Vanilla Ice\n(g) Céu Azul\n(h) Brownie\n(i) Hawaiano");
    sabor = sabor.toLowerCase();
    var preco = calcularPreco(sabor);
    if (typeof preco === 'number') {
        alert("O preço do picolé é R$:" + preco.toFixed(2));
    } else {
        alert(preco);
    }
}

mostrarPreco();


