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
  const elementInsertMovie = "<img src=" + movieImageLink + " class='imgMovie'>";
  const actionMovieLocation = document.getElementById("actionMovieLocation");
  const kidsMovieLocation = document.getElementById("kidsMovieLocation");
  const horrorMovieLocation = document.getElementById("horrorMovieLocation");
  const selectMovie = document.querySelector('#selectMovie').value;

  if (selectMovie == 'action') {
    actionMovieLocation.innerHTML += elementInsertMovie;
  } else if (selectMovie == 'kids') {
    kidsMovieLocation.innerHTML += elementInsertMovie;
  } else if (selectMovie == 'horror') {
    horrorMovieLocation.innerHTML += elementInsertMovie;
  }
}

