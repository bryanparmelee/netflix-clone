import { useEffect, useRef, useState } from "react";
import MovieThumbnail from "../movie-thumbnail/movie-thumbnail.component";

const CategoryRow = ({ category, fetchURL }) => {
    const [movies, setMovies] = useState([]);
    const [slideIndex, setSlideIndex] = useState(0);

    const URL = `https://api.themoviedb.org/3${fetchURL}`;

    const rowRef = useRef();

    const handleClick = (direction) => {
        if (direction === 'left') {
            setSlideIndex(prev => prev - 1);
            console.log(slideIndex);
        } 
        if (direction === 'right') {
            setSlideIndex(prev => prev + 1);
        }
    }

    const leftClick = () => handleClick('left');
    const rightClick = () => handleClick('right');

    useEffect(() => {
        fetch(URL)
            .then(response => response.json())
            .then(data => setMovies(data.results))
            .catch(error => console.log(error))
    }, [URL]);

    return (
        <div className="">
            <h2 className="text-white text-lg">{category}</h2>
            <div className="flex justify-center overflow-hidden group">
                <button
                    type="button"
                    onClick={leftClick} 
                    className="border-none flex-grow-0 flex-shrink-0 my-1 w-[5%] opacity-0 group-hover:opacity-100 text-5xl bg-black/25 hover:bg-black/50 flex items-center justify-center cursor-pointer z-20 transition ease-in-out">
                     <span className="text-white">&#8249;</span>
                </button>
                
                <div 
                    ref={rowRef}
                    style={{ transform:`translateX(calc(${slideIndex} * -100%))` }}
                    className='h-auto w-[90%] flex flex-nowrap transition duration-300 ease-in-out'
                >
                    {movies && movies.map((movie, i) => 
                    (<MovieThumbnail key={movie.id} film={movie} index={i}/>
                    ))}
                     {/* <div className="h-96 w-44 bg-cyan-500 border"></div> */}
                </div>
                <button
                    type="button"
                    onClick={rightClick} 
                    className="border-none flex-grow-0 flex-shrink-0 my-1 w-[5%] opacity-0 group-hover:opacity-100 text-5xl bg-black/25 hover:bg-black/50 flex items-center justify-center cursor-pointer z-20 transition ease-in-out">
                    <span className="text-white">&#8250;</span>
                </button>
            </div>
        </div>
    )
}

export default CategoryRow;