import { useEffect, useState } from "react";
import HoverDetails from "../hover-details/hover-details.component";

import play from '../../assets/play-button-24.png';
import like from '../../assets/like button.png';
import add from '../../assets/add-button-24.png';
import more from '../../assets/down-chevron-24.png';

import genres from '../../genreData';

const MovieThumbnail = ({ film }) => {
    const [isHovered, setIsHovered] = useState(false);

    const mouseOverHandler = () => setIsHovered(true);
    const mouseOutHandler = () => setIsHovered(false);
 
    const { backdrop_path, title, vote_average, genre_ids } = film;

    const bgImg = `https://image.tmdb.org/t/p/w200${backdrop_path}`;

    // const rating = vote_average * 10;

    // const genreList = genre_ids.slice(0, 3).map(genre => {
     
    //     return (
    //         <span>{genres[genre]}</span>
    //     )
    // });

   

    return (

        <div 
            onMouseOver={mouseOverHandler} 
            onMouseOut={mouseOutHandler}
            className="w-44 h-28 relative"
        >
              {isHovered && <HoverDetails details={film} />}
        <div
            
            className="relative flex-none w-44 h-28 overflow-y-visible z-10">
            <div
                style={{backgroundImage: `url(${bgImg})`}} 
                className="w-full h-28 rounded-sm bg-cover bg-center">                    
            </div>

            {/* <div className='opacity-0 group-hover:opacity-100 hover:block bg-black w-full h-fit p-2 box-border transition delay-200 ease-out rounded-b-sm'>
                <div className="scale-75">
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
                </div>
            </div> */}
        </div>
      
        </div>
    )
}

export default MovieThumbnail;
