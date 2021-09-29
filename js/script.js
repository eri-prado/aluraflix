function adicionarFilme() {
  var enderecoFilme = document.getElementById("enderecoFilme").value;
  if (enderecoFilme.endsWith(".jpg") || enderecoFilme.endsWith(".png")) {
    listarFilmesNaTela(enderecoFilme);
  } else {
    console.error("Endereço do filme inválido");
  }
  document.getElementById("enderecoFilme").value = "";
}

function listarFilmesNaTela(enderecoFilme) {
  var elementoInserirFilme = "<img src=" + enderecoFilme + ">";
  var elementoListaFilmes = document.getElementById("listaFilmes");
  elementoListaFilmes.innerHTML += elementoInserirFilme;
}

