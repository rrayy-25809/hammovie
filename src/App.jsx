import { useState, useEffect } from "react"

function App() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        const response = await fetch(`https://nomad-movies.nomadcoders.workers.dev/movies`);
        const json = await response.json();
        setMovies(json);
        setLoading(false);
    }
    
    useEffect(() => {
        getMovies();
    },[]);

    console.log(movies[0])

    return(// tmdb에서 장르 ID가 뭔지 알아보기, https://stackoverflow.com/questions/60791758/how-to-get-country-flag-code-given-the-name-of-the-country
        <div>
            {loading ? <h1>Loading...</h1>: <div>{movies.map((movie) => (
                <div key={movie.id}>
                    <img src={movie.poster_path}/>
                    <h2>{movie.title}</h2>
                    <p>{movie.overview}</p>
                    <ul>
                        {movie.genre_ids.map((id) => (<li key={id}>{id}</li>))}
                    </ul>
                </div>
            ))}</div>}
        </div>
    )
}

export default App