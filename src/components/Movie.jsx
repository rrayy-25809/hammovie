import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function id_to_genre(id) {
    const genres = {
        28: "Action",
        12: "Adventure",
        16: "Animation",
        35: "Comedy",
        80: "Crime",
        99: "Documentary",
        18: "Drama",
        10751: "Family",
        14: "Fantasy",
        36: "History",
        27: "Horror",
        10402: "Music",
        9648: "Mystery",
        10749: "Romance",
        878: "Science Fiction",
        10770: "TV Movie",
        53: "Thriller",
        10752: "War",
        37: "Western"
    };
    return genres[id] || "Unknown";
}

function Movie({ID, CoverImg, title, summary, genre_ids}) {
    return(
        <div key={ID}>
            <img src={CoverImg} alt="CoverImg"/>
            <h2>
                <Link to={`/movie/${ID}`}>
                    {title}
                </Link>
            </h2>
            <p>{summary}</p>
            <ul>
                {genre_ids.map((id) => (<li key={id}>{id_to_genre(id)}</li>))}
            </ul>
        </div>
    )
}

Movie.propTypes = {
    ID: PropTypes.string.isRequired,
    CoverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genre_ids: PropTypes.array.isRequired
}

export default Movie;