var jogadores = [
  {
    nome: "Yugi",
    vitorias: 4,
    empates: 2,
    derrotas: 0,
    pontos: 0
  },
  {
    nome: "Kaiba",
    vitorias: 0,
    empates: 2,
    derrotas: 4,
    pontos: 0
  }
];

exibeJogadores(jogadores);

function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}

function exibeJogadores(jogadores) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    jogadores[i].pontos = calculaPontos(jogadores[i]);

    elemento += "<td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    elemento +=
      "<td><button onClick='adicionarDerrota(" +
      i +
      ")'>Derrota</button></td></tr>";
  }
  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  exibeJogadores(jogadores);
}

function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empates++;
  exibeJogadores(jogadores);
}

function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  exibeJogadores(jogadores);
}

function limpar() {
  for (var i = 0; i < jogadores.length; i++) {
    jogadores[i].vitorias = 0;
    jogadores[i].empates = 0;
    jogadores[i].derrotas = 0;
    jogadores[i].pontos = 0;
  }

  exibeJogadores(jogadores);
}

function addJogador() {
  var nomeJogador = document.getElementById("nomeJogador").value;
  if (nomeJogador.length != 0 && jogadores.indexOf(nomeJogador) == -1) {
    jogadores.push({
      nome: nomeJogador,
      vitorias: 0,
      empates: 0,
      derrotas: 0,
      pontos: 0
    });
  } else {
    alert("Campo em branco, Digite um Nome");
  }
  exibeJogadores(jogadores);
}