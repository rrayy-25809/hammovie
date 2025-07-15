import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"

function Detail() {
    const {id} = useParams();
    const getMovie = async () =>{
        const response =  await fetch(`https://nomad-movies.nomadcoders.workers.dev/movies/${id}`);
        const json = await response.json();

        console.log(json)
    }

    useEffect(() => {
        getMovie();
    }, []);
    return <h1>Detail</h1>
}

export default Detail;