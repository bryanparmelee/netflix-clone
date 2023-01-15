import { useEffect, useState } from "react";
import HoverDetails from "../hover-details/hover-details.component";

import play from '../../assets/play-button-24.png';
import like from '../../assets/like button.png';
import add from '../../assets/add-button-24.png';
import more from '../../assets/down-chevron-24.png';

import genres from '../../genreData';

const MovieThumbnail = ({ film }) => {
 
    const { backdrop_path, title, vote_average, genre_ids } = film;

    const bgImg = `https://image.tmdb.org/t/p/w200${backdrop_path}`;

    const rating = vote_average * 10;

    const genreList = genre_ids.slice(0, 3).map(genre => {
     
        return (
            <span>{genres[genre]}</span>
        )
    });

   

    return (
        <div className="flex-none w-52 h-40 transition ease-in-out delay-150 rounded hover:scale-150 hover:shadow z-10 hover:z-20 group">
            <div
                style={{backgroundImage: `url(${bgImg})`}} 
                className="w-full h-40 rounded bg-cover bg-center">                    
            </div>

            <div className='opacity-0 group-hover:opacity-100 hover:block bg-black w-full h-fit p-2 box-border transition delay-150 ease-out rounded'>
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
        </div>
    )
}

export default MovieThumbnail;
