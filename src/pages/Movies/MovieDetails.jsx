
'use client';
import { useParams } from 'react-router-dom';
import configAxios from "../../BaseUrl/BaseUrl";
import { useEffect, useState } from "react";
import { Card } from 'flowbite-react';
import { Badge } from 'flowbite-react'
function MovieDetails() {
    const [movie, setMovie] = useState("")
    let { id } = useParams();

    useEffect(() => {
        configAxios.get(`/movie/${id}`).then((data) => {
            setMovie(data.data);
        }, [])
    },)
    return (
        <div className='flex justify-center my-24 '>
            <Card
                className=" w-full h-90 my-7"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                horizontal
            >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {movie.title}
                </h5>
                <div className=" font-bold tracking-tight text-gray-900 dark:text-white">
                    release date:
                    <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                        {movie.release_date}
                    </span>
                </div>
                <div className=" font-bold tracking-tight text-gray-900 dark:text-white">
                    Vote Avarage:
                    <span className={`ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold ${+movie.vote_average > 7 ? "bg-green-800" : "bg-red-800"}  text-white`}>
                        {movie.vote_average}
                    </span>
                </div>

                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {movie.overview}
                </p>
            </Card>
        </div>

    )
}

export default MovieDetails
