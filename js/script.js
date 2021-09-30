function insertMovie() {
  const movieImageLink = document.getElementById("movieImageLink").value;
  if (movieImageLink.endsWith(".jpg") || movieImageLink.endsWith(".png")) {
    showMoviesOnScreen(movieImageLink);
  } else {
    alert("Endereço do filme inválido");
  }
  document.getElementById("movieImageLink").value = "";
}

function showMoviesOnScreen(movieImageLink) {
  const elementInsertMovie = "<img src=" + movieImageLink + ">";
  const actionMovieLocation = document.getElementById("actionMovieLocation");
  actionMovieLocation.innerHTML += elementInsertMovie;
}

