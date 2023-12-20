const searchButton= document.getElementById('searchButton');
const Movie = document.getElementById('searchInput');
const apiKey = "f48cfd06";

searchButton.addEventListener('click',function(){
    fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${Movie.value}`).then(function (res){
        return res.json();
    }).then(function (fr){
        displayMovieInfo(fr);
    }).catch(function (error){
        console.log(error);
    })
})

function displayMovieInfo(movie) {
  const movieInfoContainer = document.getElementById('movieInfo');
  movieInfoContainer.innerHTML = '';

  const title = document.createElement('p');
  title.textContent = `Title: ${movie.Title}`;

  const year = document.createElement('p');
  year.textContent = `Year: ${movie.Year}`;

  const genre = document.createElement('p');
  genre.textContent = `Genre: ${movie.Genre}`;

  const plot = document.createElement('p');
  plot.textContent = `Plot: ${movie.Plot}`;

  const poster = document.createElement('img');
  poster.src = movie.Poster;
  poster.alt = 'Movie Poster';
  

  movieInfoContainer.append(title);
  movieInfoContainer.append(year);
  movieInfoContainer.append(genre);
  movieInfoContainer.append(plot);
  movieInfoContainer.append(poster);
}
