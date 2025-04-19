document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const resultsContainer = document.getElementById('results-container');
    const loadingElement = document.getElementById('loading');
    const exampleQueries = document.querySelectorAll('.query-example');

    const API_URL = 'http://localhost:5000/api/recommend';

    searchButton.addEventListener('click', function () {
        searchMovies();
    });

    searchInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            searchMovies();
        }
    });

    exampleQueries.forEach(query => {
        query.addEventListener('click', function (e) {
            e.preventDefault();
            searchInput.value = this.textContent;
            searchMovies();
        });
    });

    function searchMovies() {
        const query = searchInput.value.trim();

        if (!query) {
            alert('Please enter a search query');
            return;
        }

        loadingElement.style.display = 'block';
        resultsContainer.innerHTML = '';

        fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                query: query,
                n: 10
            })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                loadingElement.style.display = 'none';
                displayResults(data.recommendations);
            })
            .catch(error => {
                console.error('Error:', error);
                loadingElement.style.display = 'none';
                resultsContainer.innerHTML = `
                    <div class="no-results">
                        <h2>Error</h2>
                        <p>Something went wrong. Please try again later.</p>
                    </div>
                `;
            });
    }

    function displayResults(movies) {
        resultsContainer.innerHTML = '';

        if (!movies || movies.length === 0) {
            resultsContainer.innerHTML = `
                <div class="no-results">
                    <h2>No movies found</h2>
                    <p>Try a different search query</p>
                </div>
            `;
            return;
        }

        movies.forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.className = 'movie-card';

            const posterUrl = movie.poster_path
                ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                : 'images/no-poster.jpg';

            const releaseYear = movie.first_air_date || movie.release_date
                ? (movie.first_air_date || movie.release_date).slice(0, 4)
                : 'N/A';

            
            movieCard.innerHTML = `
                <img class="movie-poster" src="${posterUrl}" alt="${movie.title}" onerror="this.src='images/no-poster.jpg';">
                <div class="movie-info">
                    <div class="movie-header">
                        <h3 class="movie-title">${movie.title}</h3>
                        <span class="movie-year">${releaseYear}</span>
                    </div>
                    
                    <p class="movie-plot">${movie.overview || 'No overview available.'}</p>
                    <a class="watch-button" href="https://www.themoviedb.org/" target="_blank">Watch on TMDB</a>
                </div>
            `;

            resultsContainer.appendChild(movieCard);
        });
    }
});
