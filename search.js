function movieResearch() {

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYmU1MzlmYTNmYzc3MDI0NTRjZTNjZDFhYWIwMjc2YSIsInN1YiI6IjY1YjIxZDI5YWIxYmM3MDE0YmE4NjE4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.W8x7wvMrW0o9YIM5rloKsmvWRRXtnPYfIT_NASDh0lQ'
        }
      };
      
      fetch('https://api.themoviedb.org/3/search/movie?query=django&include_adult=false&language=en-US&page=1', options)
        .then(response => response.json())
        .then(response => {
            let divResearch = document.querySelector("#research");
            let newDiv = document.createElement("div");
            newDiv.className = "movie";
            newDiv.innerHTML = `
            
            barre de recherche
            `
        })
        .catch(err => console.error(err));

}