function trendingMovies() {
    const btn = document.querySelector("#next_page")

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYmU1MzlmYTNmYzc3MDI0NTRjZTNjZDFhYWIwMjc2YSIsInN1YiI6IjY1YjIxZDI5YWIxYmM3MDE0YmE4NjE4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.W8x7wvMrW0o9YIM5rloKsmvWRRXtnPYfIT_NASDh0lQ'
        }
      };
      
      fetch('https://api.themoviedb.org/3/trending/movie/day?language=fr-FR', options)
        .then(response => response.json())
        .then(response => {
            let divMovie = document.querySelector("#result");
            response.results.forEach(element => {
                newDiv = document.createElement("div");
                newDiv.className = "movie";
                newDiv.innerHTML = `
                
                  <img src = "https://image.tmdb.org/t/p/w200/${element.poster_path}">
                  <h1>${element.title}</h1>
                  <h4>${element.release_date}</h4>
                  <a href="movie.html">Voir plus</a>
                `;
                divMovie.appendChild(newDiv);
            });
            if (response.next) {
              btn.style.display = 'block';
              btn.addEventListener('click', () => {
                  newDiv.innerHTML = '';
                  fetchPeople(response.next);
              })
          } else {
              btn.style.display = 'none';
          }
        })
        .catch(err => console.error(err))
          
}

trendingMovies()