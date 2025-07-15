import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"
import '../style.scss';
import { Footer, Navbar } from "../components/basic";

function Detail() {
    const {id} = useParams();
    const [json, setJson] = useState({});
    const getMovie = async () =>{
        const response =  await fetch(`https://nomad-movies.nomadcoders.workers.dev/movies/${id}`);
        const json = await response.json();
        console.log(json)
        setJson(json)
    }

    useEffect(() => {
        getMovie();
    }, []);
    return (
        <div>
            <Navbar></Navbar>
            <div className="detail-container">
                <img src={json.poster_path} alt="" />
                <h1>{json.title}</h1>
                <p>{json.overview}</p>
                <ul>
                    {Array.isArray(json.genres) &&
                        json.genres.map((genre) => <li key={genre.id}>{genre.name}</li>)
                    }
                </ul>
                <p>개봉일 : {json.release_date}</p>
                <p>러닝 타임 : {json.runtime} 분</p>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Detail;