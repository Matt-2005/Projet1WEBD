function movieResearch() {

    const query = document.querySelector("#user-research").value;

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OWRmYmRkNTBjZDQ5YzhjODk2OTliMWUxNGY0YTY1YiIsInN1YiI6IjY1YjIxZDdjYTgwMjM2MDE4NmFlYzlhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IERYhDAVtn3F0x9NjUiFBY6k0hWY1v_zoOQT62vKepw'
        }
      };
      
      fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`, options)
      .then(response => response.json())
      .then(response => {
          let divResearch = document.querySelector("#research");
          divResearch.innerHTML = "";
          response.results.forEach(movie => {
              let newDiv = document.createElement("div");
              newDiv.className = "movie";
              newDiv.innerHTML = `
                <img src = "https://image.tmdb.org/t/p/w200/${movie.poster_path}">
                <h2>${movie.title}</h2>
                <a href="movie.html?id=${movie.id}">Voir plus</a>
              `;
              divResearch.appendChild(newDiv);
          });
          document.querySelectorAll('.view-more').forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                const movieId = link.dataset.id;
                movieDetails(movieId);
            });
        });
      })
      .catch(err => console.error(err));

}

document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault();
  movieResearch();
});