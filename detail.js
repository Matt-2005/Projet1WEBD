function movieDetails() {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYmU1MzlmYTNmYzc3MDI0NTRjZTNjZDFhYWIwMjc2YSIsInN1YiI6IjY1YjIxZDI5YWIxYmM3MDE0YmE4NjE4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.W8x7wvMrW0o9YIM5rloKsmvWRRXtnPYfIT_NASDh0lQ'
        }
      };

    const url = window.location.search;
    const urlParameters = new URLSearchParams(url);
    const movieID = urlParameters.get('id');
    console.log(movieID);

    fetch(`https://api.themoviedb.org/3/movie/${movieID}`, options)
    .then(response => response.json())
    .then(response => {
        let divDetail = document.querySelector("#detail");
        newDiv = document.createElement("div");
        newDiv.innerHTML = `
          <img src = "https://image.tmdb.org/t/p/w200/${response.poster_path}">
        
        `;
        divDetail.appendChild(newDiv);
    })
    .catch(err => console.error(err));

}

movieDetails()