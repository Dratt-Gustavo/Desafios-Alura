var cartas = [
  {
    nome: "Cloud Strife",
    imagem:
      "https://cdnen.samurai-gamers.com/wp-content/uploads/2020/01/06072933/sg-ff7r-cloud-icon.png",
    atributos: {
      ataque: 7,
      defesa: 6,
      magia: 3
    }
  },
  {
    nome: "Barret Wallace",
    imagem:
      "https://cdnen.samurai-gamers.com/wp-content/uploads/2020/01/06072938/sg-ff7r-barret-icon.png",
    atributos: {
      ataque: 3,
      defesa: 8,
      magia: 4
    }
  },
  {
    nome: "tifa lockhart",
    imagem:
      "https://cdnen.samurai-gamers.com/wp-content/uploads/2020/01/06072935/sg-ff7r-tifa-icon.png",
    atributos: {
      ataque: 8,
      defesa: 5,
      magia: 2
    }
  },
  {
    nome: "Aerith Gainsborough",
    imagem:
      "https://cdnen.samurai-gamers.com/wp-content/uploads/2020/01/06072937/sg-ff7r-aerith-icon.png",
    atributos: {
      ataque: 4,
      defesa: 3,
      magia: 10
    }
  },
  {
    nome: "Sephiroth",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf7_OW6N24VQ5qPtIalgc_N3tSH9TxdZutkyQa9P5UwrzHwruNfFdGfd5qoPpQRa9vpD0&usqp=CAU",
    atributos: {
      ataque: 9,
      defesa: 6,
      magia: 8
    }
  }
];

var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 5);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 5);
  while (numeroCartaJogador == numeroCartaMaquina) {
    numeroCartaJogador = parseInt(Math.random() * 5);
  }
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  exibirCartaJogador();
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
  var divResultado = document.getElementById("resultado");
  if (
    cartaJogador.atributos[atributoSelecionado] >
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado =
      "<p class='resultado-final'>AEEE, Parabéns, Você Ganhou </p>";
  } else if (
    cartaJogador.atributos[atributoSelecionado] <
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado =
      "<p class='resultado-final'>Não foi dessa vez, Você perdeu :c </p>";
  } else {
    htmlResultado = "<p class='resultado-final'>empate!</p>";
  }
  divResultado.innerHTML = htmlResultado;

  document.getElementById("btnJogar").disabled = true;

  exibirCartaMaquina();
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}