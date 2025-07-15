import { useState, useEffect } from "react"
import Movie from "../components/Movie";
import '../style.scss';
import { Navbar, Footer } from "../components/basic";

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

    return(
        <div>
            <Navbar></Navbar>
            {loading ? <h1>Loading...</h1>: <div className="movie-list">{movies.map((movie) => (
                <Movie
                ID={movie.id}
                CoverImg={movie.poster_path}
                title={movie.title}
                summary={movie.overview}
                genre_ids={movie.genre_ids}/>
                ))}</div>}
            <Footer></Footer>
        </div>
    )
}

export default Home