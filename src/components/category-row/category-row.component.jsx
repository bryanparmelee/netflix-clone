import { useEffect, useRef, useState } from "react";
import MovieThumbnail from "../movie-thumbnail/movie-thumbnail.component";
import ScrollProgress from "../scroll-progress/scroll-progress.component";

const CategoryRow = ({ category, fetchURL, windowSize }) => {
    const [movies, setMovies] = useState([]);
    const [slideIndex, setSlideIndex] = useState(0);
    const [itemsPerRow, setItemsPerRow] = useState(5);
    const [progressItems, setProgressItems] = useState(4);

    const URL = `https://api.themoviedb.org/3${fetchURL}`;

    const rowRef = useRef();

    const handleClick = (direction) => {
        if (direction === 'left') {
            setSlideIndex(prev => prev - 1);
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

    useEffect(() => {
        if (windowSize > 768) {setItemsPerRow(5);}
        if (windowSize <= 768 && windowSize > 640) {
            setItemsPerRow(4)
        }
        if (windowSize <= 640) {setItemsPerRow(3);}
    }, [windowSize])

    useEffect(() => {
        setProgressItems(Math.ceil(movies.length / itemsPerRow));
        console.log(progressItems);
    }, [itemsPerRow, movies])

    return (
        <div className="">
            <div className="flex justify-between items-center py-1 pl-[5%] pr-[160px]">
                <h2 className="text-white text-lg">{category}</h2>
                <ScrollProgress items={progressItems} position={slideIndex} />
            </div>
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
                    className='h-auto w-[90%] flex flex-nowrap transition duration-200 ease-in-out mb-8'
                >
                    {movies && movies.map((movie, i) => 
                    (<MovieThumbnail key={movie.id} film={movie} index={i} itemsPerRow={itemsPerRow} />
                    ))}
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