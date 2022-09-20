var games = [];
var nameList = [];

var elementoListGame = document.getElementById("listaGames");

// adicionar e mostrar imagem na tela
function adicionarGame() {
  var nomeG = document.getElementById("gameTitulo").value;

  var imagemGame = document.getElementById("gameImg").value;

  if (nomeG.length != 0 && nameList.indexOf(nomeG) == -1) {
    if (imagemGame.endsWith(".jpg") || imagemGame.endsWith(".png")) {
      games.push(imagemGame);
      nameList.push(nomeG);
      alert("adicionado com sucesso");
    } else {
      alert("O endereço não é suportado, Informe um com .jpg ou .png");
    }
  } else {
    alert("Jogo ja existente na lista");
  }

  elementoListGame.innerHTML = "";

  var nomeG = (document.getElementById("gameTitulo").value = "");

  var imagemGame = (document.getElementById("gameImg").value = "");

  for (var i in games) {
    elementoListGame.innerHTML +=
      "<h3 class=game-name>" +
      nameList[i] +
      "<br><img src=" +
      games[i] +
      " class=game-img>";
  }
}
