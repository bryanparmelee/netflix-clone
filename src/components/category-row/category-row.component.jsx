import { useEffect, useState } from "react";
import MovieThumbnail from "../movie-thumbnail/movie-thumbnail.component";

const CategoryRow = ({ category, fetchURL }) => {
    const [movies, setMovies] = useState([]);
    const URL = `https://api.themoviedb.org/3${fetchURL}`;

    useEffect(() => {
        fetch(URL)
            .then(response => response.json())
            .then(data => setMovies(data.results))
            .catch(error => console.log(error))
    }, [URL]);


    return (
        <div className="w-screen pl-8 z-10 mb-10 bg-red-200">
            <h2 className="text-white text-lg">{category}</h2>
            <div className='h-auto w-full flex flex-nowrap overflow-x-scroll gap-2 scrollbar-hide'>
            {movies && movies.map((movie) => 
             (<MovieThumbnail key={movie.id} film={movie} />
             ))}
                {/* <div className="h-96 w-44 bg-cyan-500 border"></div> */}
            </div>
        </div>
    )
}

export default CategoryRow;