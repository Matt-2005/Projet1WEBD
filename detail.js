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
    movieId = urlParameters.get('id');


    fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options)
    .then(response => response.json())
        .then(response => {
            let divDetail = document.querySelector("#detail");
            let newDiv = document.createElement("div");
            newDiv.className = "movie";
            newDiv.innerHTML = `
                <img src="https://image.tmdb.org/t/p/w200/${response.poster_path}">
                <h1>${response.title}</h1>
                <h4>${response.release_date}</h4>
                <p>${response.overview}</p>
            `;
            divDetail.appendChild(newDiv);
          })
            fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews`, options)
                .then(response => response.json())
                    .then(overview => {
                        for (let i = 0; i < overview.results.length; i++) {
                            let divComments = document.querySelector("#reviews");
                            let commentDiv = document.createElement("div");
                            commentDiv.className = "comment";
                                if (overview.results[i].author_details.avatar_path == null) {
                                    avatar = "https://www.terre-net.fr/medias/farmer/actualites/2018/09/26/224013/illustration-1.jpg";
                                } else{
                                      avatar = overview.results[i].author_details.avatar_path;
                                    }
                              
                            }
                            avatar = overview.results[i].author_details.avatar_path;
                            console.log(avatar);
                            commentDiv.innerHTML = `
                                <h3>${overview.results[i].author}</h3>
                                <img src = "https://image.tmdb.org/t/p/w200/${avatar}"></img>
                                <p>${overview.results[i].content}</p>
                                `;
                              divComments.appendChild(commentDiv);
                  })
                  .catch(err => console.error(err));

}

movieDetails()
