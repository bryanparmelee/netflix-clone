import { useEffect, useState } from "react";
import HoverDetails from "../hover-details/hover-details.component";

import play from '../../assets/play-button-24.png';
import like from '../../assets/like button.png';
import add from '../../assets/add-button-24.png';
import more from '../../assets/down-chevron-24.png';

import genres from '../../genreData';

const API_KEY = process.env.REACT_APP_API_KEY;

const MovieThumbnail = ({ film, index, itemsPerRow }) => {
    const [rating, setRating] = useState("");
    const [runTime, setRunTime] = useState("");
    const { backdrop_path, title, name, vote_average, genre_ids, id } = film;

    const fetchRating = (id) => {
        const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=release_dates`;
   
        fetch(URL)
            .then(response => response.json())
            .then(data => {
                const hours = Math.floor(data.runtime / 60);
                const minutes = data.runtime - hours * 60;
                setRunTime(`${hours}h ${minutes}m`);

                const usOnly = data.release_dates.results.filter(el => el.iso_3166_1 === "US")            
                const ratedOnly = usOnly[0].release_dates.filter(el => el.certification !== "");
                ratedOnly.length ? setRating(ratedOnly[0].certification) : setRating("NA");              
            })
    }
       
 
    const bgImg = backdrop_path ? `https://image.tmdb.org/t/p/w200${backdrop_path}` : 'https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80';

    const imgSize = 100 / itemsPerRow;

    const match = Math.floor(vote_average * 10);

    const genreSlice = genre_ids.slice(0, 3);
    const genreList =  genreSlice.map((genre, i) => {
     
        return i !== genreSlice.length - 1 ? 
        (
            <span key={i} className="whitespace-nowrap"> {genres[genre]} <span className="text-slate-500"> •</span> </span>
        ) : (
            <span key={i} className="whitespace-nowrap"> {genres[genre]} </span>
        )
    });


    return (
            <div
                onMouseEnter={() => fetchRating(id)}
                style={{ maxWidth: `${imgSize}%` }}
                className="aspect-video flex-none cursor-pointer z-20 transition hover:z-50 hover:-translate-y-16 hover:scale-125 hover:drop-shadow-2xl hover:rounded group/movie relative">
              
                <img 
                    src={bgImg}
                    alt={`${title}`}                  
                    className="rounded group-hover/movie:rounded-t group-hover/movie:rounded-b-none group-hover/movie:shadow-2xl group-hover/movie:z-50" 
                />
                <div className="bg-neutral-800 hidden p-1 transition delay-200 ease-out rounded-b-sm group-hover/movie:flex flex-col gap-1 justify-evenly group-hover/movie:shadow-2xl group-hover/movie:z-50">
                    <div className="flex justify-between">
                        <div className="flex gap-1 group-hover/movie:scale-[.8] -translate-x-2">
                            <img alt='play' src={play}/>
                            <img alt='add' src={add}/>
                            <img alt='like' src={like}/>
                        </div>
                        <div className="group-hover/movie:scale-[.8]">
                            <img alt='more' src={more} />
                        </div>
                    </div>
                    <div className="flex items-center gap-2 group-hover/movie:scale-[.7] max-[360px]:-translate-x-5 -translate-x-6">
                        <div className=' text-green-500 font-bold text-xs whitespace-nowrap'>
                            <span>{`${match}% Match`}</span>
                        </div>
                        <div className='text-white text-xs border px-1 whitespace-nowrap'>
                            <span>{rating && `${rating}`}</span>
                        </div>
                        <div className="text-white text-xs whitespace-nowrap">
                            <span>{runTime && `${runTime}`}</span>
                        </div>
                        <div className="text-white text-[8px] border-[0.25px] px-1">
                            <span>HD</span>
                        </div>

                    </div>
                    <div className='text-white text-xs flex gap-1 group-hover/movie:scale-[.7] -translate-x-6 max-[360px]:-translate-x-5'>
                        {genreList}
                    </div>             
                </div>
                
       
            </div>
    )
}

export default MovieThumbnail;
