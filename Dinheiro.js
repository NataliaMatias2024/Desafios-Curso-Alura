//Converter Dolar($) em Real (R$)
//Considerar $1 = R$4.80
// Usar dolar como parâmetro

let valorEmDolar = parseFloat(prompt ("Digite o valor em dólares: "));
let valorEmReal = converterDolarReal(valorEmDolar);
alert (`$${valorEmDolar} equivale a R$${valorEmReal}`);

function converterDolarReal(valorEmDolar) {
    let cotacaoDolar = 4.80;
    let valorEmReal = (valorEmDolar * cotacaoDolar);
    return valorEmReal;
}