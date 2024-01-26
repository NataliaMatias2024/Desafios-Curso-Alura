// Calcular area (πr²) e perimetro (2πr) de uma sala circulas
//considerar pi = 3.14 e o raio da sala como parâmetro.

let raio = parseFloat(prompt("Digite o raio da sua sala: "));
areaPerimetro(raio);

function areaPerimetro(raio) {
    let pi = 3.14;
    let area = (pi * (raio * raio)).toFixed(2);
    let perimetro = (2 * pi * raio).toFixed(2);
    alert(`A área da sala circular é ${area}m² e o perímetro é de ${perimetro}m.`);   
}