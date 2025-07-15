import { useState, useEffect } from "react"
import Movie from "../components/Movie";

function Home() {
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

    return(//https://stackoverflow.com/questions/60791758/how-to-get-country-flag-code-given-the-name-of-the-country
        <div>
            {loading ? <h1>Loading...</h1>: <div>{movies.map((movie) => (
                <Movie
                ID={movie.id}
                CoverImg={movie.poster_path}
                title={movie.title}
                summary={movie.overview}
                genre_ids={movie.genre_ids}/>
                ))}</div>}
        </div>
    )
}

export default Home