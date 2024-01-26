//Criar uma tabuada com o numero como parametro


let numero = parseInt(prompt("Digite um número para saber sua tabuada: "));
tabuada(numero);


function tabuada(numero) {
    for (let multiplicador = 0; multiplicador <=10 ; multiplicador++){
      let resultado = numero * multiplicador;
      console.log(`${numero} X ${multiplicador} = ${resultado}`);
    }
}