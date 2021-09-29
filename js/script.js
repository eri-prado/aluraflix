function insertMovie() {
  var movieImageLink = document.getElementById("movieImageLink").value;
  if (movieImageLink.endsWith(".jpg") || movieImageLink.endsWith(".png")) {
    showMoviesOnScreen(movieImageLink);
  } else {
    console.error("Endereço do filme inválido");
  }
  document.getElementById("movieImageLink").value = "";
}

function showMoviesOnScreen(movieImageLink) {
  var elementInsertMovie = "<img src=" + movieImageLink + ">";
  var actionMovieLocation = document.getElementById("actionMovieLocation");
  actionMovieLocation.innerHTML += elementInsertMovie;
}

