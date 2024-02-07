function loginForm() {
    let options = {
        method: 'GET',
        headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OWRmYmRkNTBjZDQ5YzhjODk2OTliMWUxNGY0YTY1YiIsInN1YiI6IjY1YjIxZDdjYTgwMjM2MDE4NmFlYzlhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IERYhDAVtn3F0x9NjUiFBY6k0hWY1v_zoOQT62vKepw'
        }
    };


    fetch(`https://api.themoviedb.org/3/authentication/token/new`, options)
        .then(response => response.json())
        .then(response => {
            let token = response.request_token;
            console.log(token);

            let loginForm = document.getElementById('loginForm');

            loginForm.addEventListener('submit', function (event) {
                event.preventDefault();
        
                let username = document.getElementById('Email').value;
                let password = document.getElementById('Password').value;
        
                let options = {
                    method: 'POST',
                    Headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username: username,
                        password: password
                    })
                };
                console.log(options);
                fetch(`https://api.themoviedb.org/3/authentication/session/new`)
                    .then(response => response.json())
                    .then(response => {
                        console.log(response);
                    })
        
        
        
            })





        })
        .catch(err => console.error(err));


}

loginForm();