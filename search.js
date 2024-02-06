function movieResearch() {

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OWRmYmRkNTBjZDQ5YzhjODk2OTliMWUxNGY0YTY1YiIsInN1YiI6IjY1YjIxZDdjYTgwMjM2MDE4NmFlYzlhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IERYhDAVtn3F0x9NjUiFBY6k0hWY1v_zoOQT62vKepw'
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