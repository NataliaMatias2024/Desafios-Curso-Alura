//fatorial sinalizado por !.
//Calculado por n * (n-1) ate chegar a 1! 
//NUNCA chega a zero
//1! e 0! é = 1

let resultado = 1;

let numero = parseInt(prompt("Digite o número a ser calculado: "));
console.log (numero);

if (numero == 1 || numero == 0) {
    alert (`A operação ${numero}! é igual a 1`);
} else {
    alert (`A operação ${numero}! é igual a ${calculoFatorial(numero)}`);
}

function calculoFatorial(numero) {
    for (let contador = 1; contador <= numero; contador++) {
        resultado = resultado * contador;    
}
    return resultado;
}