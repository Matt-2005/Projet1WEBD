function trendFilms () {
    const btn = document.querySelector('#next_page');
    const list = document.querySelector('#filmList');
    const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';

    const fetchFilm = (url) => {
        // recupérer une page des personnages de star wars
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                data.results.forEach((film) => {
                    const movie = document.createElement('div');
                    movie.classList.add('film_title');
                    // recupérer la planete d'origine du personnage
                    fetch(character.homeworld)
                        .then(response => response.json())
                        .then(data =>
                            char.innerHTML = `
                            <h3>${character.name}</h3>
                            <p>${data.name}</p>
                            <ul class="sw_char_films">
                            </ul>`
                        )
                        .catch(error => console.error('Erreur: ', error));
                    character.films.forEach((film) => {
                        // recupérer le titre du film
                        fetch(film)
                            .then((response) => {
                                return response.json();
                            })
                            .then((data) => {
                                const filmLi = document.createElement('li');
                                filmLi.innerText = data.title;
                                char.querySelector('.sw_char_films').appendChild(filmLi);
                            })
                    })
                    list.appendChild(char);
                })
                if (data.next) {
                    btn.style.display = 'block';
                    btn.addEventListener('click', () => {
                        list.innerHTML = '';
                        fetchPeople(data.next);
                    })
                } else {
                    btn.style.display = 'none';
                }
            })
    }

    fetchFilm(url);
}