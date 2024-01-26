//Função(altura,largura) 
//Mostre na tela a área(base x altura) e o perímetro 
// de uma sala retangula

let altura = parseFloat(prompt("Digite a altura: "));
let largura = parseFloat(prompt("Digite a largura: "));
areaPerimetro(largura,altura);


function areaPerimetro(largura,altura){
    let area = altura * largura;
    let perimetro = (2* (largura+altura));
    alert(`A área da sala é ${area}m² e o perímetro é ${perimetro}m`)
}