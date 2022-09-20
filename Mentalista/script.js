var numeroSecreto = parseInt(Math.random() * 11);
var tentativa = 1;

function Chutar() {
  var chute = parseInt(document.getElementById("valor").value);
  var elementoResultado = document.getElementById("resultado");

  if (tentativa < 4) {
    if (chute == numeroSecreto) {
      elementoResultado.innerHTML = "Parabéns! Vôce acertou.";
    } else {
      if (chute > 10 || chute < 0) {
        elementoResultado.innerHTML = "você deve digitar um numero de 0 a 10";
      } else if (numeroSecreto < chute) {
        elementoResultado.innerHTML = "Voce errou, o numero correto é menor!";
      } else if (numeroSecreto > chute) {
        elementoResultado.innerHTML = "Voce errou, o numero correto é maior!";
      }
    }

    tentativa = tentativa + 1;
  } else {
    elementoResultado.innerHTML = `que pena, vc excedeu o numero de tentativas`;
  }
}