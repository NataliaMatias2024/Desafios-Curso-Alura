let fatorial = 5; /*prompt ("Digite um número: ");*/
let contador = fatorial;
let resultado = fatorial;

if (fatorial == 0 || fatorial == 1) {
    console.log (`O fatorial de ${fatorial}! é = 1`);    
} else {
    console.log (`O fatorial de ${fatorial}! é = ${fatorialCalculo (fatorial,contador,resultado)}`);
}

function fatorialCalculo (fatorial,contador,resultado) {
    while (contador >= 1, fatorial > 1) {
        resultado = resultado * (fatorial - 1);
        fatorial--;
        contador--;
    }
    return resultado;
}