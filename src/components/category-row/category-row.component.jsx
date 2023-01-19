import { useEffect, useRef, useState } from "react";
import MovieThumbnail from "../movie-thumbnail/movie-thumbnail.component";

const CategoryRow = ({ category, fetchURL }) => {
    const [movies, setMovies] = useState([]);
    const URL = `https://api.themoviedb.org/3${fetchURL}`;

    const rowRef = useRef();

    const handleClick = (direction) => {
        let distance = rowRef.current.getBoundingClientRect().x - 50;
        if (direction === 'left') {
            rowRef.current.style.transform = `translateX(${230 + distance}px)`;
        }
        if (direction === 'right') {
            rowRef.current.style.transform = `translateX(${-230 + distance}px)`;
        }
      
    }

    const handleLeftClick = () => handleClick('left');
    const handleRightClick = () => handleClick('right');

    useEffect(() => {
        fetch(URL)
            .then(response => response.json())
            .then(data => setMovies(data.results))
            .catch(error => console.log(error))
    }, [URL]);

    return (
        <div className="w-screen z-10 mb-10 bg-red-200 text-white">
            <h2 className="text-white text-lg">{category}</h2>
            <div className="relative">
                <div
                    onClick={handleLeftClick} 
                    className="z-50 h-full w-12 text-5xl absolute left-0 top-0 bottom-0 m-auto bg-black/50  flex items-center justify-center cursor-pointer">
                   &#60;
                </div>
                
                <div 
                    ref={rowRef}
                    className='h-auto w-full ml-12 flex flex-nowrap gap-2 z-20 transition duration-500 ease-in-out'>
                {movies && movies.map((movie) => 
                (<MovieThumbnail key={movie.id} film={movie} />
                ))}
                    {/* <div className="h-96 w-44 bg-cyan-500 border"></div> */}
                </div>
                <div
                    onClick={handleRightClick} 
                    className="h-full w-12 text-5xl absolute right-0 top-0 bottom-0 m-auto bg-black/50 z-50 flex items-center justify-center cursor-pointer">
                    <span>&#62;</span>
                </div>
            </div>
        </div>
    )
}

export default CategoryRow;