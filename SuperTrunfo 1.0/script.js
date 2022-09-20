var cartas = [
  {
    nome: "Cloud Strife",
    imagem:
      "https://cdnen.samurai-gamers.com/wp-content/uploads/2020/01/06072933/sg-ff7r-cloud-icon.png",
    atributos: {
      força: 7,
      defesa: 6,
      magia: 3,
      materia: 2
    }
  },
  {
    nome: "Barret Wallace",
    imagem:
      "https://cdnen.samurai-gamers.com/wp-content/uploads/2020/01/06072938/sg-ff7r-barret-icon.png",
    atributos: {
      ataqie: 3,
      defesa: 8,
      magia: 4,
      materia: 6
    }
  },
  {
    nome: "tifa lockhart",
    imagem:
      "https://cdnen.samurai-gamers.com/wp-content/uploads/2020/01/06072935/sg-ff7r-tifa-icon.png",
    atributos: {
      força: 8,
      defesa: 5,
      magia: 2,
      materia: 4
    }
  },
  {
    nome: "Aerith Gainsborough",
    imagem:
      "https://cdnen.samurai-gamers.com/wp-content/uploads/2020/01/06072937/sg-ff7r-aerith-icon.png",
    atributos: {
      força: 4,
      defesa: 3,
      magia: 10,
      materia: 3
    }
  },
  {
    nome: "Sephiroth",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf7_OW6N24VQ5qPtIalgc_N3tSH9TxdZutkyQa9P5UwrzHwruNfFdGfd5qoPpQRa9vpD0&usqp=CAU",
    atributos: {
      força: 9,
      defesa: 6,
      magia: 8,
      materia: 10
    }
  }
];

var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 5);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 5);

  while (numeroCartaMaquina == numeroCartaJogador) {
    var numeroCartaJogador = parseInt(Math.random() * 5);
  }

  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);

  document.getElementById("btnSortear").disabled = true;

  document.getElementById("btnJogar").disabled = false;

  exibirOpcoes();
}

function exibirOpcoes() {
  var opcoes = document.getElementById("opcoes");

  var opcoesTexto = "";
  opcoesTexto += "<h3>" + cartaJogador.nome + "</h3>";
  opcoesTexto += "<img src= " + cartaJogador.imagem + "><br>";

  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type ='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      ": " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }

  opcoes.innerHTML = opcoesTexto;
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var elementoResultado = document.getElementById("resultado");
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  if (atributoSelecionado == undefined) {
    alert("Selecione um atributo para jogar.");
  } else {
    var elementoResultado = document.getElementById("resultado");
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

    if (valorCartaJogador > valorCartaMaquina) {
      elementoResultado.innerHTML = "Parabéns! Você Venceu!";
    } else if (valorCartaMaquina > valorCartaJogador) {
      elementoResultado.innerHTML =
        "Perdeu! a maquina tem uma carta mais forte";
    } else {
      elementoResultado.innerHTML = "empate!";
    }
  }
}