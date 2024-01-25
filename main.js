function trendingMovies() {
    const url = 'https://api.themoviedb.org/3/trending/movie/{time_window}';
    const btn = document.querySelector("#next_page")

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYmU1MzlmYTNmYzc3MDI0NTRjZTNjZDFhYWIwMjc2YSIsInN1YiI6IjY1YjIxZDI5YWIxYmM3MDE0YmE4NjE4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.W8x7wvMrW0o9YIM5rloKsmvWRRXtnPYfIT_NASDh0lQ'
        }
      };
      
      fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err))

}

trendingMovies()