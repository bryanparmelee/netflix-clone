import { useEffect, useState } from "react";
import HoverDetails from "../hover-details/hover-details.component";

import play from '../../assets/play-button-24.png';
import like from '../../assets/like button.png';
import add from '../../assets/add-button-24.png';
import more from '../../assets/down-chevron-24.png';

import genres from '../../genreData';

const MovieThumbnail = ({ film, index, itemsPerRow }) => {
    const [isHovered, setIsHovered] = useState(false);

    const imgSize = 100 / itemsPerRow;

    const mouseOverHandler = () => setIsHovered(true);
    const mouseOutHandler = () => setIsHovered(false);
 
    const { backdrop_path, title, vote_average, genre_ids } = film;

    const bgImg = `https://image.tmdb.org/t/p/w200${backdrop_path}`;

  

    const rating = vote_average * 10;

    const genreList = genre_ids.slice(0, 3).map(genre => {
     
        return (
            <span>{genres[genre]}</span>
        )
    });

    console.log(imgSize);

    return (

        <div
            style={{ width:`${imgSize}%` }}
            className="aspect-video flex-none p-1 relative cursor-pointer z-10 overflow-hidden" 
            // style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
            // onMouseEnter={mouseOverHandler} 
            // onMouseLeave={mouseOutHandler}
            
        >
            <img 
                src={bgImg}
                alt={`${title}`}
                className="w-full h-full object-cover"   
            />

            {/* <div className=' bg-black w-full h-fit p-2 box-border transition delay-200 ease-out rounded-b-sm'>                
                <div className="flex justify-between pb-2">
                    <div className="flex gap-1">
                        <img alt='play' src={play}/>
                        <img alt='add' src={add}/>
                        <img alt='like' src={like}/>
                    </div>
                    <div className="">
                        <img alt='more' src={more} />
                    </div>
                </div>
                <span className='text-green-500 font-bold text-xs'>{`${rating}% Match`}</span>
                <div className='text-white text-xs flex gap-2'>
                    {genreList}
                </div>             
            </div> */}
   
      
        </div>
    )
}

export default MovieThumbnail;
